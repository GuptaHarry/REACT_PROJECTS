
function Header(){
    return (<div className="heading">

        <img className="images" src="https://aartisto.com/wp-content/uploads/2020/11/myntra.png" height="80px" width="80px" />
        <div className="options">

          <button className="but">Men</button>
          <button className="but">Women</button>
          <button className="but">Kids</button>
          <button className="but">Home and Living</button>
          <button className="but">Studio</button>
          <button className="but">Beauty</button>

        </div>

        <input placeholder="search for products , brands and more " className="searchbar"/>

        <div className="profile">
            <button className="pro">Profile</button>
            <button className="pro">WishList</button>
            <button className="pro">Bag</button>
        </div>
    </div>
    );
}





export default Header;