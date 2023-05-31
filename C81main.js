canvas=document.getElementById("mycanvas");
pen=canvas.getContext("2d");
color="red";
pen_width=7;

pen.beginPath();
pen.strokeStyle="blue";
pen.lineWidth=pen_width;
pen.arc(200,200,50,0,2*Math.PI);
pen.stroke();

pen.beginPath();
pen.strokeStyle="grey";
pen.lineWidth=pen_width;
pen.rect(100,100,500,300)
pen.stroke();

pen.beginPath();
pen.strokeStyle="black";
pen.lineWidth=pen_width;
pen.arc(325,200,50,0,2*Math.PI);
pen.stroke();

pen.beginPath();
pen.strokeStyle="red";
pen.lineWidth=pen_width;
pen.arc(450,200,50,0,2*Math.PI);
pen.stroke();

pen.beginPath();
pen.strokeStyle="yellow";
pen.lineWidth=pen_width;
pen.arc(265,250,50,0,2*Math.PI);
pen.stroke();

pen.beginPath();
pen.strokeStyle="green";
pen.lineWidth=pen_width;
pen.arc(390,250,50,0,2*Math.PI);
pen.stroke();


