
Bootstrappifier for CakePHP is a Javascript library to use Twitter Bootstrap library with CakePHP without need of FormHelper hacks.

For download:
https://github.com/JacopKane/Cakephp-Bootstrappifier/zipball/master

For install:
1. You have to include jQuery library and bootstrap.css (or bootstrap.less and less.js as your preference) in your layout.
2. Clone repository to your plugin directory at unix terminal:
	as Submodule:
	$ git submodule add https://github.com/mtkocak/Cakephp-Bootstrappifier.git /Your/Path/To/app/Plugins/CakeBootstrappifier
	...or Clone:
	$ git clone https://github.com/mtkocak/Cakephp-Bootstrappifier.git /Your/Path/To/app/Plugins/CakeBootstrappifier
3. Example layout configuration:

	<?php
		echo $this->Html->script(array(
			'https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js',
			'/CakeBootstrappifier/js/cakebootstrap'
		));
	
		echo $this->Html->css(array('bootstrap'));
	?>

- For any question mtkocak@gmail.com