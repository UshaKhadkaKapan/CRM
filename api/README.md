# Ecommerce admin Cms

This is a project is build for the admin to create and manage their ecommere store.

This is only the API server part. The api is available at rep `....`

## How to use

1. run `git clone <put your url here>`
2. run `npm i`
3. run `cd <folder name>`
4. run `npm run dev` for the local development. Not that you must have nodemon install in your system, if not run `npm i nodemon -g`

## API

All our api url follow the following patterns:`{rootUrl}/api/v1`

## Admin registration and login test

This section show you how you can access the api admin registration and login.

Note: TODO: make sure the admin registration api is protected after first admin i create because only admin can add another admin user.

All registration and login api follow the following patterns `{rootUrl}/api/v1/register-login`

| #   | PATH | METHOD | IS PRIVATE | DESCRIPTION                                                           |
| --- | ---- | ------ | ---------- | --------------------------------------------------------------------- |
| 1.  | "/"  | POST   | Yes        | Send user data fName, lName... to care new admin user in the database |
