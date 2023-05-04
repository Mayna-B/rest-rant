const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
              <h1>HOME</h1>
              <div>
                <img src="/images/chia-fruit-tea.jpg" alt="Chia Fruit Tea" />
                <div>
                  Photo by <a href="https://www.queenofmykitchen.com/contact/">Mona</a> on <a href="https://www.queenofmykitchen.com/chia-juice/">Queen of My Kitchen</a>
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