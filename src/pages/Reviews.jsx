import React from 'react'

function Reviews() {
    return (
        <div className="reviews">
            <h1>Customer Reviews</h1>
        
        <div id="carouselExampleControls" className="carousel slide" data-ride="false">
            <div class="carousel-inner">
                <div className="carousel-item active">
                    <p>"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful."</p>
                    <img src="./images/customer1.jpg" className="customerImage"></img>
                    <h5>Maxim Smith</h5>
                     <em>CEO, Founder</em>
                </div>
   
                <div className="carousel-item">
                    <p>"Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?""</p>
                    <img src="./images/customer2.jpg" className="customerImage"></img>
                    <h5>Geert Green</h5>
                    <em>CEO, Founder</em>
                </div>
    
                <div className="carousel-item">
                    <p>"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain."</p>
                    <img src="./images/customer3.jpg" className="customerImage"></img>
                    <h5>Dennis Roman</h5>
                    <em>CEO, Founder</em>
                </div>
        </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon"></span>
            </a>
  
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon"></span>
               
            </a>
        </div>
        
        </div>
    )
}
export default Reviews;