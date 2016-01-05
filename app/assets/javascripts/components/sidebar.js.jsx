(function() {

var style = {
  container: {
    backgroundColor: "green",
    width: "20%"
  },
  h1: {
    color: 'green'
  }
}

components.Sidebar = React.createClass({
  render: function() {
    return (
      <div className="sidebar" style={style.container}>
        <h1>Links</h1>
      </div>
    );
  }
});


})();