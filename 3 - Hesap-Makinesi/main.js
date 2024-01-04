document.addEventListener('DOMContentLoaded', function () {
    // HTML elementlerini seç
    const num1Input = document.getElementById('num1');
    const num2Input = document.getElementById('num2');
    const resultInput = document.getElementById('result');
    
    const addButton = document.getElementById('add');
    const subtractButton = document.getElementById('subtract');
    const multiplyButton = document.getElementById('multiply');
    const divideButton = document.getElementById('divide');
    
    // Toplama işlemi
    addButton.addEventListener('click', function (e) {
        e.preventDefault();
        calculateResult('add');
    });
    
    // Çıkarma işlemi
    subtractButton.addEventListener('click', function (e) {
        e.preventDefault();
        calculateResult('subtract');
    });
    
    // Çarpma işlemi
    multiplyButton.addEventListener('click', function (e) {
        e.preventDefault();
        calculateResult('multiply');
    });
    
    // Bölme işlemi
    divideButton.addEventListener('click', function (e) {
        e.preventDefault();
        calculateResult('divide');
    });
    
    // Hesaplama fonksiyonu
    function calculateResult(operation) {
        const num1 = parseFloat(num1Input.value);
        const num2 = parseFloat(num2Input.value);
        
        if (isNaN(num1) || isNaN(num2)) {
            alert('Lütfen geçerli sayılar girin.');
            return;
        }
        
        let result;
        
        switch (operation) {
            case 'add':
                result = num1 + num2;
                break;
            case 'subtract':
                result = num1 - num2;
                break;
            case 'multiply':
                result = num1 * num2;
                break;
            case 'divide':
                if (num2 === 0) {
                    alert('Sıfıra bölme hatası!');
                    return;
                }
                result = num1 / num2;
                break;
            default:
                alert('Geçersiz işlem!');
                return;
        }
        
        // Sonucu ekrana yazdır
        resultInput.value = result;
    }
});
