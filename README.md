# OpenSBPM Website
 This is the repository of http://opensbpm.org webbsite. 
OpenSBPM uses [Grav](https://getgrav.org) as fancy flat-file CMS.

# Requirements
* PHP 7.3.6 or higher

# QuickStart
You can run the opensbpm website locally with ease.  
You already have *PHP* installed, haven't you? If so, you are nearly ready.

First clone this repository and change into the cloned directory.
```bash
git clone git@github.com:opensbpm/website.git
cd website
```
Change to the src directory.
```bash
cd src
```
Run grav composer to install all dependencies.
```bash
./bin/grav composer
```
At least run PHP as Development Server with the system router script.
```bash
php -S localhost:8000 system/router.php
```
Point your browser to http://localhost:8000 and enjoy the OpenSBPM locally.

# Local Development
For easier configuration you can install [Grav Standard Administration Panel Plugin](https://github.com/getgrav/grav-plugin-admin)
It comes with an WYSIWYG-like editor for the pages.
```bash
./bin/gpm install admin
```
After this you need to create a user account with admin privileges
```bash
./bin/plugin login new-user
```
