
Bootstrappifier for CakePHP is a Javascript library to use Twitter Bootstrap library with CakePHP without need of FormHelper hacks.

For download:

https://github.com/mtkocak/Cakephp-Bootstrappifier

For install:

1. You have to have Twitter Bootstrap configured. (cake.generic.css removed from default.ctp, files downloaded and included to you webroot/css and web root/js folders )

2. Copy cakebootstrap.js in your webroot/js folder 

3. Your View/Layouts/default.ctp file must include this in head tag:

echo $this->Html->css('bootstrap.min'); //You don't need to add again if you have this
echo $this->Html->script('libs/jquery-1.6.2.min.js');


- For any question mtkocak@gmail.com