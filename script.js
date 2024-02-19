// prathomik variable-gulo 
let dynamicSeatLeft = document.getElementById('dynamicSeatLeft');

let shobSeat = document.getElementsByClassName('seat');

let cartTableBody = document.getElementById('cartTableBody');

let tkPerSeat = parseFloat(document.getElementById('tkPerSeat').innerText);

let dynamicCartCount = document.getElementById('dynamicCartCount');

let dynamicTotalPrice = document.getElementById('dynamicTotalPrice');

let dynamicGrandTotalPrice = document.getElementById('dynamicGrandTotalPrice');

let couponErValue = document.getElementById('couponValue');

let couponDiv = document.getElementById('couponDiv');

let nirbachitoSeatCount = 0;

let totalPrice = 0;

let grandTotalPrice = 0;

// cart update-er table-e tbody append korar function
function updateCart(seatNumber) {
    let notunRow = document.createElement('tr');
    let seatCell = document.createElement('td');
    seatCell.innerText = seatNumber;
    
    let classCell = document.createElement('td');
    classCell.innerText = 'Economy';
    
    let priceCell = document.createElement('td');
    priceCell.innerText = tkPerSeat.toFixed();
    
    notunRow.appendChild(seatCell);
    notunRow.appendChild(classCell);
    notunRow.appendChild(priceCell);
    
    cartTableBody.appendChild(notunRow);
}


// for loop diye seat nirbachon o daam update kora

for (let i = 0; i < shobSeat.length; i++) {
    let seat = shobSeat[i];
    seat.addEventListener('click', function () {
        if (!seat.classList.contains("selected") && nirbachitoSeatCount < 4) {
            seat.classList.add("selected");
            seat.style.backgroundColor = "#27AE60";
            nirbachitoSeatCount = nirbachitoSeatCount + 1;
            updateCart(seat.innerText);
            priceUpdates();
            
        }
        if (nirbachitoSeatCount >= 1) {
            document.getElementById('nextSuccessBtn').disabled = false;
        }
        if (nirbachitoSeatCount == 4) {
            document.getElementById('couponValue').disabled = false;
            alert('Wow! The coupon box is open for you! 😊 But... Sorry, boss! CharTar beshi seat booking dewa jabe na. 🙁');
        }
    })
};

// coupon apply kore price update kora 
applyCoupon.addEventListener('click', function () {
    priceUpdates();
    let couponAmount = 0;
    couponAmount = grandTotalPrice - totalPrice;
    let cpnAmountUpdate = document.getElementById('couponDiscount');
    cpnAmountUpdate.innerHTML = `<div class="font-bold text-center flex justify-evenly"><p>Coupon Discount</p><p> BDT ${couponAmount} </p></div>`;
    cpnAmountUpdate.appendChild(div);
    // 
});

// cart-er price-gulor function 
function priceUpdates() {
    dynamicCartCount.innerText = nirbachitoSeatCount;
    
    dynamicSeatLeft.innerText = 40 - nirbachitoSeatCount;
    
    totalPrice = tkPerSeat * nirbachitoSeatCount;
    
    dynamicTotalPrice.innerText = totalPrice.toFixed();
    
    grandTotalPrice = totalPrice;
    
    
    // coupon jachai 
    if (couponErValue.value === 'NEW15') {
        // grandTotalPrice *= 0.85;
        grandTotalPrice = grandTotalPrice * 0.85;
        couponDiv.style.display = 'none';
    } else if (couponErValue.value === 'Couple 20') {
        // grandTotalPrice *= 0.80; 
        grandTotalPrice = grandTotalPrice * 0.80;
        couponDiv.style.display = 'none';
    } else {
        // alert('Invalid');
    }
    
    dynamicGrandTotalPrice.innerText = grandTotalPrice.toFixed();
}

// modal close korle page reload. inline-e use koray ekhane comment out kora holo 
// function pageReload() {
    //     window.location.reload()
    // }
    
    // Next button-er shathe modal connect korar cheshta 
    
    document.getElementById('nextSuccessBtn').addEventListener('click', function () {
        if (document.getElementById('name') === "" || document.getElementById('phone') === "" || document.getElementById('email') === "") {
            alert('Required field alert! Form-er shobgulo field obosshoi puron korte hobe.');
            return;
        }
        document.getElementById('myModal1').showModal();
    });
    