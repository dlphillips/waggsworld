// Include React as a dependency
var React = require("react");

// Include the Query and Results components
var Query = require("./search/Query");
var Results = require("./search/Results");

// Include the helpers for making API calls
var helpers = require("../utils/helpers");

// Create the Search component
var DogDate = React.createClass({

  // Render the component. Note how we deploy both the Query and the Results Components
  render: function() {

    return (
      <div className="main-container">
        <div className="row">
            <section id="blog" className="section">
                <div className="container">
                    <div className="title text-center">
                        <h2 className="text-uppercase">Dog Date</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                    </div>
                    <div id="my_news" className="mrg_top80 row-eq-height">
                        <div className="row">

                            <div className="col-sm-6 col-md-6">
                                <div className="single_news">
                                    <div className="img_news"> <img src={"http://placehold.it/1280x675"} alt="Blog Image" /> </div>
                                    <div className="news">
                                        <div className="topic">
                                            <div className="title_topic">
                                                <h4><a href="#">Google could learn from rival Microsoft in EU's antitrust decision</a></h4>
                                                <p className="date pull-left"><i className="fa fa-calendar color"></i> 26 feb 2017</p>
                                                <p className="author_name pull-left"><i className="fa fa-user color"></i> By Admin</p>
                                            </div>
                                            <div className="clearfix"></div>
                                            <p className="mrg_top20 text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged...</p>
                                        </div>

                                        <div className="topic_info mrg_top40 text-center">
                                            <div className="col-xs-4 col-sm-4 col-md-4">
                                                <p className="like"><i className="fa fa-heart"></i> 30</p>
                                            </div>
                                            <div className="col-xs-4 col-sm-4 col-md-4">
                                                <p className="comment"><i className="fa fa-comment"></i> 60</p>
                                            </div>
                                            <div className="col-xs-4 col-sm-4 col-md-4">
                                                <p className="viwes"><i className="fa fa-eye"></i> 190</p>
                                            </div>
                                        </div>
                                        <div className="clearfix"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-6 col-md-6">
                                <div className="single_news">
                                    <div className="img_news"> <img src={"http://placehold.it/1280x675"} alt="Blog Image"/> </div>
                                    <div className="news">
                                        <div className="topic">
                                            <div className="title_topic">
                                                <h4><a href="#">Microsoft Expands Linux Container Support in Windows Server</a></h4>
                                                <p className="date pull-left"><i className="fa fa-calendar color"></i> 22 feb 2017</p>
                                                <p className="author_name pull-left"><i className="fa fa-user color"></i> By Admin</p>
                                            </div>
                                            <div className="clearfix"></div>
                                            <p className="mrg_top20 text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged...</p>
                                        </div>

                                        <div className="topic_info mrg_top40 text-center">
                                            <div className="col-xs-4 col-sm-4 col-md-4">
                                                <p className="like"><i className="fa fa-heart"></i> 170</p>
                                            </div>
                                            <div className="col-xs-4 col-sm-4 col-md-4">
                                                <p className="comment"><i className="fa fa-comment"></i> 120</p>
                                            </div>
                                            <div className="col-xs-4 col-sm-4 col-md-4">
                                                <p className="viwes"><i className="fa fa-eye"></i> 300</p>
                                            </div>
                                        </div>
                                        <div className="clearfix"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-6 col-md-6">
                                <div className="single_news">
                                    <div className="img_news"> <img src={"http://placehold.it/1280x675"} alt="Blog Image"/> </div>
                                    <div className="news">
                                        <div className="topic">
                                            <div className="title_topic">
                                                <h4><a href="#">Instagram testing new thread-style comments in posts</a></h4>
                                                <p className="date pull-left"><i className="fa fa-calendar color"></i> 19 feb 2017</p>
                                                <p className="author_name pull-left"><i className="fa fa-user color"></i> By Admin</p>
                                            </div>
                                            <div className="clearfix"></div>
                                            <p className="mrg_top20 text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged...</p>
                                        </div>

                                        <div className="topic_info mrg_top40 text-center">
                                            <div className="col-xs-4 col-sm-4 col-md-4 col-lg">
                                                <p className="like"><i className="fa fa-heart"></i> 500</p>
                                            </div>
                                            <div className="col-xs-4 col-sm-4 col-md-4">
                                                <p className="comment"><i className="fa fa-comment"></i> 250</p>
                                            </div>
                                            <div className="col-xs-4 col-sm-4 col-md-4">
                                                <p className="viwes"><i className="fa fa-eye"></i> 450</p>
                                            </div>
                                        </div>
                                        <div className="clearfix"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-6 col-md-6">
                                <div className="single_news">
                                    <div className="img_news"> <img src={"http://placehold.it/1280x675"} alt="Blog Image"/> </div>
                                    <div className="news">
                                        <div className="topic">
                                            <div className="title_topic">
                                                <h4><a href="#">Microsoft's Mixer Could Shake Up the Streaming Game</a></h4>
                                                <p className="date pull-left"><i className="fa fa-calendar color"></i> 17 feb 2017</p>
                                                <p className="author_name pull-left"><i className="fa fa-user color"></i> By Admin</p>
                                            </div>
                                            <div className="clearfix"></div>
                                            <p className="mrg_top20 text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged...</p>
                                        </div>

                                        <div className="topic_info mrg_top40 text-center">
                                            <div className="col-xs-4 col-sm-4 col-md-4">
                                                <p className="like"><i className="fa fa-heart"></i> 120</p>
                                            </div>
                                            <div className="col-xs-4 col-sm-4 col-md-4">
                                                <p className="comment"><i className="fa fa-comment"></i> 80</p>
                                            </div>
                                            <div className="col-xs-4 col-sm-4 col-md-4">
                                                <p className="viwes"><i className="fa fa-eye"></i> 250</p>
                                            </div>
                                        </div>
                                        <div className="clearfix"></div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
      </div>
    );
  }
});

// Export the module back to the route
module.exports = DogDate;
