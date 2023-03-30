## Running tests locally

*  Install chromedriver correctly before running the tests:

`export ELECTRON_CUSTOM_VERSION=23.0.0`
`npm run lerna bootstrap`


*  Run jest:

`npm run test`


## Notes

The rest of the tests to be rewritten have been left on this commit fa1256e4d19fc481e316a09523746ce9359d4073
-fileSending
-joiningUser
-lazyLoading
-newUser.returns

In the current approach, installers are taken from github releases, but in the future the application will be built on CI