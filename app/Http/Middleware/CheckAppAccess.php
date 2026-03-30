<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class CheckAppAccess
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     * @param  string  $app  Идентификатор приложения (например, 'dashboard', 'chat')
     */
    public function handle(Request $request, Closure $next, string $app): Response
    {
        $user = $request->user();

        if (!$user) {
            return response()->json(['message' => 'Unauthenticated'], 401);
        }

        // Получаем разрешённые роли для данного приложения из конфига
        $allowedRoles = config("permissions.apps.{$app}", []);

        // Если приложение не настроено в конфиге – запрещаем доступ
        if (empty($allowedRoles)) {
            return response()->json(['message' => 'Access denied: app not configured'], 403);
        }

        // Проверяем, входит ли роль пользователя в разрешённые
        if (!in_array($user->role, $allowedRoles)) {
            return response()->json(['message' => 'Forbidden'], 403);
        }

        return $next($request);
    }
}