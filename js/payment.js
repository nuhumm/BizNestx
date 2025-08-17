document.getElementById("payBtn")?.addEventListener("click", function(){
    let handler = PaystackPop.setup({
        key: 'pk_test_1f17e631736808e0bfb16718badb05a1cedb3691',
        email: 'customer@email.com',
        amount: 5000, // Amount in kobo (NGN 50.00)
        currency: 'NGN',
        callback: function(response){
            alert("Payment successful! Ref: " + response.reference);
        }
    });
    handler.openIframe();
});
