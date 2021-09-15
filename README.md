# Artify Back
Back End of an application that allows designers and photographers to upload their work and establish contact with interested consumers.

# Start the project

Clone this repo

To install all dependecies run in the project directory
### `yarn` 

## Create a claudinary account 
https://cloudinary.com/

## Create a .env file
Set the following enviroment variables<br/>

PORT=3001<br/>
DB_PROD = /database connection (Mongo DB)/<br/>
SECRET = /personal secret word/<br/>

### Cloudinary
You can find these three values in you cloudinary account on the Dashboard menu

CLOUDNAME <br/>
CLOUDAPIKEY<br/>
CLOUDSECRET<br/>

### nodeMailer
email and password of the account thats is going to be used to send emails<br/>

EMAIL<br/>
PASS<br/>

The project is set to use an Outlook account, in case of using another server modify "helpers/sendMail.js" line 4. <br/>
/<br/>
service:"your server"<br/>
/<br/>

## Available scripts

run locally with nodemon
### `yarn dev` 

run locally with node
### `yarn start`

# See the front end
https://github.com/Luisve9/Artify-Front
