const getSumBtn = document.createElement("button");
        getSumBtn.append("Get Total Price");
        document.body.appendChild(getSumBtn);

        const getSum = () => {
            // Get all elements with the class 'price'
            const prices = document.querySelectorAll('.price');

            // Initialize the total sum
            let totalSum = 0;

            // Loop through each price element and add its value to the total sum
            prices.forEach(priceElement => {
                totalSum += parseInt(priceElement.textContent);
            });
                const para = document.createElement("p");
					para.innerText = "Total Price: Rs " + totalSum
				     para.id = "ans";

						document.body.appendChild(para);
            // Display the total sum in an alert box
			
        };

        getSumBtn.addEventListener("click", getSum);
