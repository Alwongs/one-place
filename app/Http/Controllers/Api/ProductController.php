<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;
use Illuminate\Support\Facades\Auth;
use App\Http\Resources\ProductResource;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json(['products' => Product::all()]); 

        // return response()->json(['products' => Product::where('user_id', Auth::id())->get()]);        
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $product = $request->all();
        $product['user_id'] = Auth::user()->id;
        
        return response()->json(['data' => new ProductResource(Product::create($product))]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
        return $product;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Product $product)
    {
        $product->update($request->all());
        return response()->json(['data' => new ProductResource($product)]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        $product->delete();
        return response()->json(['message' => 'Product removed']);
    }
}
