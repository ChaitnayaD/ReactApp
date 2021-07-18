const Dashboard = () => {
    return ( 
        <div className="dash">
             <div id="dashboardbox">
              <div className="dashhead">
                  <h2>Dashboard</h2>
                 <div className="post">
                     <h3>What's On Your Mind</h3>
                     <textarea className="postbox" type="text1" name="name" placeholder="Type Your Post Here....." />
                     <input type="button" name="signup_submit" value="Post" />
                 </div>

             </div>


             </div>
        </div>
    

     );
}
 
export default Dashboard;