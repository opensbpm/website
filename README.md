# OpenSBPM Website
 This is the repository of http://opensbpm.org webbsite. 
OpenSBPM uses [Grav](https://getgrav.org) as fancy flat-file CMS.

# Requirements
* PHP 7.3.6 or higher

# QuickStart
You can run the opensbpm website locally with ease.  
You already have *PHP* installed, haven't you? If so, you are nearly ready.

First clone this repository and change into the cloned directory.
```shell
git clone git@github.com:opensbpm/website.git
cd website
```
Change to the src directory.
```shell
cd src
```
Run grav composer to install all dependencies.
```shell
./bin/grav composer
```
At least run PHP as Development Server with the system router script.
```shell
php -S localhost:8000 system/router.php
```
Point your browser to http://localhost:8000 and enjoy the OpenSBPM locally.
