casper.test.begin('Testing index of blog.fernando.inf.br', 3, function(test) {
  casper.start('http://blog.fabricio.inf.br', function() {
    test.assertHttpStatus(200);
    test.assertTitle('Fernando Fabricio');
    test.assertEquals(this.getHTML('#header-inner > div.titlewrapper > h1'), "\nFernando Fabricio\n");
  });

  casper.run(function() {
    test.done();
  });
});
