//first test js
import {expect} from 'chai';
//second test DOM
import jsdom from 'jsdom';
import fs from 'fs';

//first assert/expect
describe('Our first test', () => {
    it('should pass', () => {
    expect(true).to.equal(true);
    });
});

//second assert DOM
describe('index.html', () => {
    it('should say hello', (done) => {
        const index = fs.readFileSync('./src/index.html', "utf-8");
        jsdom.env(index, function(err, window) {
            const h1 = window.document.getElementsByTagName('h1')[0];
            expect(h1.innerHTML).to.equal("Hello Node !");
            done();
            window.close();
        });
    });
});