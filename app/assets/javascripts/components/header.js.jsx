(function() {
  
var style = {
  container: {
    backgroundColor: "#ddd",
    width: 900
  },
  h1: {
    color: 'green'
  }
}


components.Header = React.createClass({
  render: function() {
    return (
      <div className="header" style={style.container}>
        <HeaderContent />
      </div>
    );
  }
});

HeaderContent = React.createClass({
  render: function() {
    return (
      <h1 style={style.h1}>MySelf</h1>
    );
  }
});


})();