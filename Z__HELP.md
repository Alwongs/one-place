***Video guid***

    - https://www.youtube.com/watch?v=qJq9ZMB2Was

         - installing laravel and react
         - authorization through api
         - CRUD actions
         - deploying on hosting

**Config laravel project***
    - php artisan migrate

**Create React**    
    - npm create vite
    - npm install

**Install Router**    
    - npm install react-router-dom -S

**Install Asios**    
    - npm install -S axios

    **Поддомены**
    https://www.youtube.com/watch?v=fiOC523zqAs


RewriteEngin On

RewriteBase /api
RewriteCond %{HTTP_HOST} ^(www\.)?alwong9h\.beget\.tech
RewriteCond % {REQUEST_URI} !^/api/
RewriteRule ^(.*)$ api/$1 [L]
