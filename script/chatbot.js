var inputField = document.querySelector('input[name= "user-message"]');
var messageDiv = document.querySelector('.main-div');
var storeContainer = document.querySelector('.store-container');
var orderContainer = document.querySelector('.order-container');
var orderStatus = document.getElementById('order-status');
var orderMessage = document.getElementById('order-message');
var orderNumEntered = false;
var close = document.getElementsByClassName('close');

function openChatBot() {
    document.querySelector('.container').style.display = 'block';
    document.querySelector('.main-img').style.display = 'none';
}

function showOrderRelated() {
    messageDiv.appendChild(orderContainer);
    orderContainer.style.display = 'block';
    storeContainer.style.display = 'none';
    orderMessage.style.display = 'none';
    orderStatus.style.display = 'none';
    autoScroll();
}

function showStoreRelated() {
    messageDiv.appendChild(storeContainer);
    orderContainer.style.display = 'none';
    orderMessage.style.display = 'none';
    orderStatus.style.display = 'none';
    storeContainer.style.display = 'block';
}

function showPlaceOrder() {
    messageDiv.appendChild(orderMessage);
    orderMessage.style.display = 'block';
    orderStatus.style.display = 'none';
    orderMessage.innerHTML = '';
    orderMessage.innerHTML = 'Please click on the below link to place a Subway order' + '<br>';
    var link = document.createElement('a');
    link.setAttribute('href', '#');
    link.innerHTML = 'Place Order Here';
    orderMessage.appendChild(link);
    autoScroll();
 }

 function checkOrder() {
    orderNumEntered = true;
    messageDiv.appendChild(orderMessage);
    orderMessage.style.display = 'block';
    orderMessage.innerHTML = '';
    orderMessage.innerHTML = 'Please enter your order number';
    autoScroll();
}

inputField.addEventListener('keyup', function(e) {
    if (e.code == 'Enter') {
        var inputValue = inputField.value;
        inputField.value = "";
        showMessage(inputValue);
    }
});
function showMessage(val) {
    var newNode = document.createElement('div');
    var newChildNode = document.createElement('div');
    newNode.append(newChildNode);
    messageDiv.appendChild(document.createElement('br'));
    newNode.className = 'user-msg-div';
    newChildNode.innerHTML = val;
    newChildNode.className = 'user-msg';
    messageDiv.appendChild(newNode);
    messageDiv.appendChild(document.createElement('br'));
    if (orderNumEntered) {
        setTimeout(function() {
            messageDiv.appendChild(document.getElementById('order-status'));
            orderStatus.style.display = 'block';
        }, 1000);   
    }
    autoScroll();
    orderNumEntered = false;
}
close[0].addEventListener('click', function() {
    document.querySelector('.container').style.display = 'none';
    document.querySelector('.main-img').style.display = 'block';
    orderContainer.style.display = 'none';
    storeContainer.style.display = 'none';
    orderMessage.style.display = 'none';
    orderStatus.style.display = 'none';
});

function autoScroll() {
    messageDiv.scrollTop = messageDiv.scrollHeight;
}

function showOrderIssue() {
    messageDiv.appendChild(orderMessage);
    orderMessage.style.display = 'block';
    orderStatus.style.display = 'none';
    orderMessage.innerHTML = 'Please dial 1800-Subway to contact our customer care' + '<br>';
    autoScroll();
   }