casper.test.begin('Testing index of blog.fernando.inf.br', 1, function suite(test){
    casper.start('http://blog.fabricio.inf.br', function(){
        test.assertHttpStatus(200);
    });

    casper.run(function(){
        test.done();
    });
});
