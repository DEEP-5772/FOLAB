import React from "react";

export default function HomePage1() {
  return (
    <>
      <div id="captioned-gallery">
	<figure class="slider">
		<figure>
			<img src="https://media.istockphoto.com/vectors/doctor-people-work-in-medical-laboratory-with-lab-test-tubes-vector-id1291294296?b=1&k=20&m=1291294296&s=170667a&w=0&h=c3vQGFP_WHfUbjwBoyvdFnJJR6mOoyY1XR-s5SIHHJw="/>
		</figure>
		<figure>
			<img src="https://us.123rf.com/450wm/sapannpix/sapannpix1704/sapannpix170400016/75949000-professor-doctor-scientist-and-science-technician-doing-research-and-analysis-in-medical-science-lab.jpg?ver=6" />
		</figure>
		<figure>
			<img src="https://www.pathkindlabs.com/sites/default/files/2021-07/Web-image-5.jpg" />
		</figure>
		<figure>
			<img src="https://thumbs.dreamstime.com/b/vector-illustration-doctors-medical-lab-making-vaccine-scientists-coronavirus-immunization-concept-flat-cartoon-style-178330382.jpg" />
		</figure>
		<figure>
			<img src="https://www.biospectrumasia.com/uploads/articles/1-11445.jpg" />
		</figure>
	</figure>
</div>

      {/* https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfW4C6DIVkbum-Y6RZlMNdg9EP9U4ERenCZQ&usqp=CAU */}

      {/* https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAzd3nz8MT9_YSCBEHlyWjvxc6FZNNrcDuNw&usqp=CAU */}

      {/* https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0fLElsXwgPItq4iyMdv9vLb6NtXPn8PGcCA&usqp=CAU  */}

      {/* https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA65Cb2ne5k7Eh5k31NLJHs0Tfcstum61Syg&usqp=CAU */}



	<div class="accordion mx-3" id="accordionExample">
  <div class="accordion-item">

    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
	  <b>Why are lab test essential?</b>
      </button>
    </h2>
    
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
	  Lab tests or diagnostic tests are recommended by doctors when they suspect that there might be something wrong with your health. Samples of your blood, stool, urine, or mucus can reveal a lot about the state of your health when analysed with special devices. Once the problem is detected, your doctor can diagnose and put you on medication or suggest a course of treatment.
      </div>
    </div>
  </div>


  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
	 <b>How long does it take for report to be delivered?</b>
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
	  It takes <b>24-48 hours</b> for the lab to prepare your report and have it delivered to you.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      <b>Whay you should choose this website?</b>
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
	  Website will give you efficient time managemt. You can show information of your area's Laboratory and hospital information from this website. 
      </div>
    </div>
  </div>
</div>  
    </>
  );
}
