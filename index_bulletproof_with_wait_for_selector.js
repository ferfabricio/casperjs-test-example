casper.test.begin('Testing index of blog.fernando.inf.br', 3, function(test) {
  casper.start('http://blog.fabricio.inf.br', function() {
    test.assertHttpStatus(200);
  });

  casper.then(function() {
    casper.waitForSelector(
      '#header-inner > div.titlewrapper > h1',
      function then() {
        test.assertTitle('Fernando Fabricio');
        test.assertEquals(
          this.getHTML('#header-inner > div.titlewrapper > h1'),
          "\nFernando Fabricio\n"
        );
      },
      function timeout() {
        test.comment('The element h1 is not presented!');
      },
      3000
    );
  });

  casper.run(function() {
    test.done();
  });
});
