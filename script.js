function findAreaOfSquare () {
				/**
				 * 1. get the value of the width
				 *   1.1 get the element width input element
				 *   1.2 get the value of the element
				 *   1.4 ensure that value is a number 
				 *   1.5 store the value in a variable 
				 * 2. get the value of the height
				 *   2.1 get the element height input element
				 *   2.2 get the value of the element
				 *   2.4 ensure that value is a number 
				 *   2.5 store the value in a variable 
				 * 3. calculate the value of the area, area = width * height
				 * 4. set the value of the area
				 *   4.1 get the element area input element
				 *   4.2 set the value of the area element to be the calculated area
				**/
				var width = document.getElementById("width");
				var width_value = parseFloat(width.value);

				var height = document.getElementById("height");
				var height_value = parseFloat(height.value);

				var areaOfSquare = width_value * height_value;

				var area = document.getElementById("area");
				area.value = areaOfSquare;

			}

			function findAreaOfTriangle () {
				var base = document.getElementById("base");
				var base_value = parseFloat(base.value);

				var height = document.getElementById("heightOfTriangle");
				var height_value = parseFloat(height.value);
				var areaOfTriangle = (base_value * height_value) / 2;
				var area = document.getElementById("areaOfTriangle");
				area.value = areaOfTriangle;
			}

			function reset() {
    			document.getElementById("areaOfTriangle").reset();
			}
		
			function findAreaOfCircle() {
				var radius = document.getElementById("radius");
				var radius_value = parseFloat(radius.value);
				var areaOfCircle = 2 * radius_value  * Math.PI;
				var area = document.getElementById("areaOfCircle");
				area.value = areaOfCircle; 
			}

			function findAreaOfRectangle() {
				var length = document.getElementById("length");
				var length_value = parseFloat(length.value);
				var width = document.getElementById("width");
				var width_value = parseFloat(width.value);
				var areaOfRectangle = width_value * length_value;
				var area = document.getElementById("areaOfRectangle");
				area.value = areaOfRectangle; 
			}

			function findAreaOfRhombus() {
				var p = document.getElementById("pDiagonal");
				var p_value = parseFloat(p.value);
				var q = document.getElementById("qDiagonal");
				var q_value = parseFloat(q.value);
				var areaOfRhombus = (p_value * q_value) / 2;
				var area = document.getElementById("areaOfRhombus");
				area.value = areaOfRhombus; 
			}

			function findAreaOfTrapezoid() {
				var b1 = document.getElementById("base1");
				var b1_value = parseFloat(b1.value);

				var b2 = document.getElementById("base2");
				var b2_value = parseFloat(b2.value);

				var h = document.getElementById("heightOfTrapezoid");
				var h_value = parseFloat(h.value);

				var areaOfTrapezoid = (b1_value + b2_value) * h_value / 2;
				var area = document.getElementById("areaOfTrapezoid");
				area.value = areaOfTrapezoid; 
			}

			function findAreaOfParallelogram() {
				var b = document.getElementById("base");
				var b_value = parseFloat(b.value);
				var h = document.getElementById("height");
				var h_value = parseFloat(h.value);
				var areaOfParallelogram = b_value * h_value;
				var area = document.getElementById("areaOfParallelogram");
				area.value = areaOfParallelogram; 
			}












