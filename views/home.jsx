const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
              <h1>HOME</h1>
              <div>
                <img src="/images/Dog Latte.jpg" alt="Dogge Latte Art" />
                <div>
                  Photo by <a href="https://www.myrecipes.com/extracrispy/the-cutest-latte-art-dogs-of-instagram/">MRNOVEL</a> on <a href="https://www.gettyimages.com/search/2/image?family=creative&phrase=dog%20latte">Getty Images</a>
                </div>
              </div>
              <a href="/places">
                <button className="btn-primary">Places Page</button>
              </a>
            </main>
        </Def>
    )
}

module.exports = home