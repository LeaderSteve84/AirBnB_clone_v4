#AirBnB Clone - The Console
The console is the first segment of the AirBnB project at Holberton School that will collectively cover fundamental concepts of higher level programming. The goal of AirBnB project is to eventually deploy our server a simple copy of the AirBnB Website(HBnB). A command interpreter is created in this segment to manage objects for the AirBnB(HBnB) website.

#### Functionalities of this command interpreter:
* Create a new object (ex: a new User or a new Place)
* Retrieve an object from a file, a database etc...
* Do operations on objects (count, compute stats, etc...)
* Update attributes of an object
* Destroy an object

## Table of Content
* [Environment](#environment)
* [Installation](#installation)
* [File Descriptions](#file-descriptions)
* [Usage](#usage)
* [Examples of use](#examples-of-use)
* [Bugs](#bugs)
* [Authors](#authors)
* [License](#license)

## Environment
This project is interpreted/tested on Ubuntu 14.04 LTS using python3 (version 3.4.3)

## Installation
* Clone this repository: `git clone "https://github.com/alexaorrico/AirBnB_clone.git"`
* Access AirBnb directory: `cd AirBnB_clone`
* Run hbnb(interactively): `./console` and enter command
* Run hbnb(non-interactively): `echo "<command>" | ./console.py`

## File Descriptions
[console.py](console.py) - the console contains the entry point of the command interpreter. 
List of commands this console current supports:
* `EOF` - exits console 
* `quit` - exits console
* `<emptyline>` - overwrites default emptyline method and does nothing
* `create` - Creates a new instance of`BaseModel`, saves it (to the JSON file) and prints the id
* `destroy` - Deletes an instance based on the class name and id (save the change into the JSON file). 
* `show` - Prints the string representation of an instance based on the class name and id.
* `all` - Prints all string representation of all instances based or not on the class name. 
* `update` - Updates an instance based on the class name and id by adding or updating attribute (save the change into the JSON file). 

#### `models/` directory contains classes used for this project:
[base_model.py](/models/base_model.py) - The BaseModel class from which future classes will be derived
* `def __init__(self, *args, **kwargs)` - Initialization of the base model
* `def __str__(self)` - String representation of the BaseModel class
* `def save(self)` - Updates the attribute `updated_at` with the current datetime
* `def to_dict(self)` - returns a dictionary containing all keys/values of the instance

Classes inherited from Base Model:
* [amenity.py](/models/amenity.py)
* [city.py](/models/city.py)
* [place.py](/models/place.py)
* [review.py](/models/review.py)
* [state.py](/models/state.py)
* [user.py](/models/user.py)

#### `/models/engine` directory contains File Storage class that handles JASON serialization and deserialization :
[file_storage.py](/models/engine/file_storage.py) - serializes instances to a JSON file & deserializes back to instances
* `def all(self)` - returns the dictionary __objects
* `def new(self, obj)` - sets in __objects the obj with key <obj class name>.id
* `def save(self)` - serializes __objects to the JSON file (path: __file_path)
* ` def reload(self)` -  deserializes the JSON file to __objects

#### `/tests` directory contains all unit test cases for this project:
[/test_models/test_base_model.py](/tests/test_models/test_base_model.py) - Contains the TestBaseModel and TestBaseModelDocs classes
TestBaseModelDocs class:
* `def setUpClass(cls)`- Set up for the doc tests
* `def test_pep8_conformance_base_model(self)` - Test that models/base_model.py conforms to PEP8
* `def test_pep8_conformance_test_base_model(self)` - Test that tests/test_models/test_base_model.py conforms to PEP8
* `def test_bm_module_docstring(self)` - Test for the base_model.py module docstring
* `def test_bm_class_docstring(self)` - Test for the BaseModel class docstring
* `def test_bm_func_docstrings(self)` - Test for the presence of docstrings in BaseModel methods

TestBaseModel class:
* `def test_is_base_model(self)` - Test that the instatiation of a BaseModel works
* `def test_created_at_instantiation(self)` - Test created_at is a pub. instance attribute of type datetime
* `def test_updated_at_instantiation(self)` - Test updated_at is a pub. instance attribute of type datetime
* `def test_diff_datetime_objs(self)` - Test that two BaseModel instances have different datetime objects

[/test_models/test_amenity.py](/tests/test_models/test_amenity.py) - Contains the TestAmenityDocs class:
* `def setUpClass(cls)` - Set up for the doc tests
* `def test_pep8_conformance_amenity(self)` - Test that models/amenity.py conforms to PEP8
* `def test_pep8_conformance_test_amenity(self)` - Test that tests/test_models/test_amenity.py conforms to PEP8
* `def test_amenity_module_docstring(self)` - Test for the amenity.py module docstring
* `def test_amenity_class_docstring(self)` - Test for the Amenity class docstring

[/test_models/test_city.py](/tests/test_models/test_city.py) - Contains the TestCityDocs class:
* `def setUpClass(cls)` - Set up for the doc tests
* `def test_pep8_conformance_city(self)` - Test that models/city.py conforms to PEP8
* `def test_pep8_conformance_test_city(self)` - Test that tests/test_models/test_city.py conforms to PEP8
* `def test_city_module_docstring(self)` - Test for the city.py module docstring
* `def test_city_class_docstring(self)` - Test for the City class docstring

[/test_models/test_file_storage.py](/tests/test_models/test_file_storage.py) - Contains the TestFileStorageDocs class:
* `def setUpClass(cls)` - Set up for the doc tests
* `def test_pep8_conformance_file_storage(self)` - Test that models/file_storage.py conforms to PEP8
* `def test_pep8_conformance_test_file_storage(self)` - Test that tests/test_models/test_file_storage.py conforms to PEP8
* `def test_file_storage_module_docstring(self)` - Test for the file_storage.py module docstring
* `def test_file_storage_class_docstring(self)` - Test for the FileStorage class docstring

[/test_models/test_place.py](/tests/test_models/test_place.py) - Contains the TestPlaceDoc class:
* `def setUpClass(cls)` - Set up for the doc tests
* `def test_pep8_conformance_place(self)` - Test that models/place.py conforms to PEP8.
* `def test_pep8_conformance_test_place(self)` - Test that tests/test_models/test_place.py conforms to PEP8.
* `def test_place_module_docstring(self)` - Test for the place.py module docstring
* `def test_place_class_docstring(self)` - Test for the Place class docstring

[/test_models/test_review.py](/tests/test_models/test_review.py) - Contains the TestReviewDocs class:
* `def setUpClass(cls)` - Set up for the doc tests
* `def test_pep8_conformance_review(self)` - Test that models/review.py conforms to PEP8
* `def test_pep8_conformance_test_review(self)` - Test that tests/test_models/test_review.py conforms to PEP8
* `def test_review_module_docstring(self)` - Test for the review.py module docstring
* `def test_review_class_docstring(self)` - Test for the Review class docstring

[/test_models/state.py](/tests/test_models/test_state.py) - Contains the TestStateDocs class:
* `def setUpClass(cls)` - Set up for the doc tests
* `def test_pep8_conformance_state(self)` - Test that models/state.py conforms to PEP8
* `def test_pep8_conformance_test_state(self)` - Test that tests/test_models/test_state.py conforms to PEP8
* `def test_state_module_docstring(self)` - Test for the state.py module docstring
* `def test_state_class_docstring(self)` - Test for the State class docstring

[/test_models/user.py](/tests/test_models/test_user.py) - Contains the TestUserDocs class:
* `def setUpClass(cls)` - Set up for the doc tests
* `def test_pep8_conformance_user(self)` - Test that models/user.py conforms to PEP8
* `def test_pep8_conformance_test_user(self)` - Test that tests/test_models/test_user.py conforms to PEP8
* `def test_user_module_docstring(self)` - Test for the user.py module docstring
* `def test_user_class_docstring(self)` - Test for the User class docstring


## Examples of use
```
vagrantAirBnB_clone$./console.py
(hbnb) help

Documented commands (type help <topic>):
========================================
EOF  all  create  destroy  help  quit  show  update

(hbnb) all MyModel
** class doesn't exist **
(hbnb) create BaseModel
7da56403-cc45-4f1c-ad32-bfafeb2bb050
(hbnb) all BaseModel
[[BaseModel] (7da56403-cc45-4f1c-ad32-bfafeb2bb050) {'updated_at': datetime.datetime(2017, 9, 28, 9, 50, 46, 772167), 'id': '7da56403-cc45-4f1c-ad32-bfafeb2bb050', 'created_at': datetime.datetime(2017, 9, 28, 9, 50, 46, 772123)}]
(hbnb) show BaseModel 7da56403-cc45-4f1c-ad32-bfafeb2bb050
[BaseModel] (7da56403-cc45-4f1c-ad32-bfafeb2bb050) {'updated_at': datetime.datetime(2017, 9, 28, 9, 50, 46, 772167), 'id': '7da56403-cc45-4f1c-ad32-bfafeb2bb050', 'created_at': datetime.datetime(2017, 9, 28, 9, 50, 46, 772123)}
(hbnb) destroy BaseModel 7da56403-cc45-4f1c-ad32-bfafeb2bb050
(hbnb) show BaseModel 7da56403-cc45-4f1c-ad32-bfafeb2bb050
** no instance found **
(hbnb) quit
```

## Bugs
No known bugs at this time. 

## Authors
<ol>
        <li>Alexa Orrico - [Github](https://github.com/alexaorrico) / [Twitter](https://twitter.com/alexa_orrico)</li>
        <li>Jennifer Huang - [Github](https://github.com/jhuang10123) / [Twitter](https://twitter.com/earthtojhuang)</li>  
        <li>Jhoan Zamora - [Github](https://github.com/jzamora5) / [Twitter](https://twitter.com/JhoanZamora10)</li>
        <li>David Ovalle - [Github](https://github.com/Nukemenonai) / [Twitter](https://twitter.com/disartDave)</li>
        The two below authors worked on Web dynamic
        <li>Stephen B. Adah - [Github](https://github.com/LeaderSteve84) / [Twitter](https://twitter.com/Elbest2018)</li>
        <li>Richard Senyo Gadasu - [Github](https://github.com/Senyo197) / [Twitter](https://twitter.com/RichardSenyo_)</li>
</ol>

## Resources and Installations for Web Dynamic
### Resources

<ol>
	<li><a href="https://jquery-tutorial.net/selectors/using-elements-ids-and-classes/">Selector</a></li>
	<li><a href="https://jquery-tutorial.net/dom-manipulation/getting-and-setting-content/">Get and set content</a></li>
	<li><a href="https://jquery-tutorial.net/dom-manipulation/getting-and-setting-css-classes/">Manipulate CSS classes</a></li>
	<li><a href="https://jquery-tutorial.net/dom-manipulation/the-append-and-prepend-methods/">Manipulate DOM elements</a></li>
	<li><a href="https://learn.jquery.com/using-jquery-core/document-ready/">Document ready</a></li>
	<li><a href="https://jquery-tutorial.net/ajax/introduction/">Introduction</a></li>
	<li><a href="https://intranet.alxswe.com/rltoken/kmBzs_QPD72Oz--Yk80JHw">GET & POST request</a></li>
	<li><a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS">HTTP access control (CORS)</a></li>
</ol>

### Installations

Before starting the project…
You will work on a codebase using<a href="https://github.com/flasgger/flasgger"> Flasgger,</a> you will need to install it locally first before starting the RestAPI:
<ul>
        <li>$ sudo apt-get install -y python3-lxml</li>
        <li>$ sudo pip3 install flask_cors # if it was not installed yet</li>
        <li>$ sudo pip3 install flasgger</li>
</ul>
If the RestAPI is not starting, please read the error message. Based on the(ses) error message(s), you will have to troubleshoot potential dependencies issues.

Here some solutions:

jsonschema exception
<ul>
        <li>$ sudo pip3 uninstall -y jsonschema </li>
        <li>$ sudo pip3 install jsonschema==3.0.1</li>
</ul>
No module named 'pathlib2'
<ul><li>$ sudo pip3 install pathlib2</li></ul>

## Tasks (Web Dynamic)
### 0. Last clone!
mandatory
A new codebase again? Yes!

For this project you will fork this <a href="https://github.com/jzamora5/AirBnB_clone_v3">codebase:</a>
<ul>
        <li>Update the repository name to AirBnB_clone_v4</li>
        <li>Update the README.md:</li>
        <ul>
                <li>Add yourself as an author of the project</li>
                <li>Add new information about your new contribution</li>
                <li>Make it better!</li>
        </ul>
        <li>If you’re the owner of this codebase, create a new repository called AirBnB_clone_v4 and copy over all files from AirBnB_clone_v3</li>
        <li>If you didn’t install Flasgger from the previous project, it’s time! sudo pip3 install flasgger</li>
</ul>

### 1. Cash only
mandatory
Write a script that starts a Flask web application:
<ul>
	<li>Based on web_flask, copy: web_flask/static, web_flask/templates/100-hbnb.html, web_flask/__init__.py and web_flask/100-hbnb.py into the web_dynamic folder</li>
	<li>Rename 100-hbnb.py to 0-hbnb.py</li>
	<li>Rename 100-hbnb.html to 0-hbnb.html</li>
	<li>Update 0-hbnb.py to replace the existing route to /0-hbnb/</li>
</ul>
If 100-hbnb.html is not present, use 8-hbnb.html instead

<p>guillaume@ubuntu:~/AirBnB_v4$ HBNB_MYSQL_USER=hbnb_dev HBNB_MYSQL_PWD=hbnb_dev_pwd HBNB_MYSQL_HOST=localhost HBNB_MYSQL_DB=hbnb_dev_db HBNB_TYPE_STORAGE=db python3 -m web_dynamic.0-hbnb
* Running on http://0.0.0.0:5000/ (Press CTRL+C to quit)
...
</p>
<p>.
One problem now is the asset caching done by Flask.

To avoid that, you will add a query string to each asset:

In 0-hbnb.py, add a variable cache_id to the render_template. The value of this variable must be an UUID (uuid.uuid4())

In 0-hbnb.html, add this variable cache_id as query string to each <link> tag URL
</p>
<p>
<p>
guillaume@ubuntu:~/AirBnB_v4$ curl -s -XGET http://0.0.0.0:5000/0-hbnb/ | head -6
<!DOCTYPE HTML>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="stylesheet" type="text/css" href="../static/styles/4-common.css?e211c9eb-7d17-4f12-85eb-4d50fa50cb1d" />
    <link rel="stylesheet" type="text/css" href="../static/styles/3-header.css?e211c9eb-7d17-4f12-85eb-4d50fa50cb1d" />
</p>
<p>
guillaume@ubuntu:~/AirBnB_v4$ curl -s -XGET http://0.0.0.0:5000/0-hbnb/ | head -6
<!DOCTYPE HTML>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="stylesheet" type="text/css" href="../static/styles/4-common.css?f834413e-0aa9-4767-b64a-c92db9cb1f82" />
    <link rel="stylesheet" type="text/css" href="../static/styles/3-header.css?f834413e-0aa9-4767-b64a-c92db9cb1f82" />
</p>
<p>
    guillaume@ubuntu:~/AirBnB_v4$  
</p>

<p>
### 2. Select some Amenities to be comfortable!
mandatory
For the moment the filters section is static, let’s make it dynamic!

Replace the route 0-hbnb with 1-hbnb in the file 1-hbnb.py (based on 0-hbnb.py)

        Create a new template 1-hbnb.html (based on 0-hbnb.html) and update it:
<ul>
       <li>Import JQuery in the <head> tag</li>
        <li>Import the JavaScript static/scripts/1-hbnb.js in the <head> tag</li>
        <li>In 1-hbnb.html and the following HTML files, add this variable cache_id as query string to the above <script> tag</li>
                <ul>        
                        <li>Add a <input type="checkbox"> tag to the li tag of each amenity</li>
                </ul>
        <li>The new checkbox must be at 10px on the left of the Amenity name</li>
        <li>Add to the input tags of each amenity (<li> tag) the attribute data-id=":amenity_id" => this will allow us to retrieve the Amenity ID from the DOM</li>
        <li>Add to the input tags of each amenity (<li> tag) the attribute data-name=":amenity_name" => this will allow us to retrieve the Amenity name from the DOM</li>
</ul>
        Write a JavaScript script (static/scripts/1-hbnb.js):
<ul>
                <li>Your script must be executed only when DOM is loaded</li>
                <li>You must use JQuery</li>
                <li>Listen for changes on each input checkbox tag:</li>
                <ul>
                        <li>if the checkbox is checked, you must store the Amenity ID in a variable (dictionary or list)</li>
                        <li>if the checkbox is unchecked, you must remove the Amenity ID from the variable</li>
                        <li>update the h4 tag inside the div Amenities with the list of Amenities checked</li>
                </ul>
</ul>
</p>

Second part of Airbnb: Joann Vuong

## License
Public Domain. No copy write protection. 
