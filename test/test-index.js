const chai = require('chai');

const {expect} = chai;

const testPath = __filename;
const srcFilename = testPath.slice(__dirname.length + 6).split('.')[0].concat('.js');
const srcPath = `${__dirname.replace('/test', '/src')}/${srcFilename}`;
const underTest = require(srcPath);

describe(`Testing: ${srcPath}\n   [Tests: ${testPath}]`, () => {
  it('Returns "World"', (done) => {
    const result = underTest;

    expect(result.hello).to.equal('world');

    done();
  });
});
