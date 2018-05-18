import React from 'react';
import '../css/AppFooterComponent.css';

class AppFooterComponent extends React.Component{
  render() {
    return(
        
<div class="footer-bottom">

	<div class="container">
		<div class="row">
			<div class="col-sm-6 ">
				<div class="copyright-text">
					<p>CopyRight © 2018 CodeVivors All Rights Reserved</p>
				</div>
			</div> 
			<div class="col-sm-6">							
				<ul class="social-link pull-right">
					<li><a href=""><i class="far fa-heart"></i></a></li>						
					<li><a href=""><i class="fab fa-facebook-f"></i></a></li>
					<li><a href=""><i class="fab fa-twitter"></i></a></li>
					<li><a href=""><i class="fab fa-instagram"></i></a></li>
					
				</ul>	
									
			</div> 
		</div>
	</div>
	<hr class="footer" />
</div>

    );
  }

}

export default AppFooterComponent;

