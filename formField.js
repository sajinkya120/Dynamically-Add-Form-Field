$(document).ready(function(){
			$("#btn").click(function(){
				var label = prompt("Enter Label");
				var type = prompt("Enter Input type");
				
				if(label && type){
				$("p.first").append(" <p> "+ label + " <input type='+ type +' /> " + " </p> ");
				}
			});
		});