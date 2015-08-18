# casperjs-test-example

Example of CasperJS use for a little test

Please see the post in: http://blog.fabricio.inf.br

## Running the tests
```bash
casperjs test yourtestfile.js

# OR to execute all
casperjs test *.js
```
## Test Cases
### Test Index to have some elements
* Filename: index.js
* Tests case
1. Verify http response code if equals to 200
2. Verify if the title text is equals to *Fernando Fabricio*
3. Verify if the element h1 text is equals to *\nFernando Fabricio\n* (yes, the blogger add this break line in the title :T)
