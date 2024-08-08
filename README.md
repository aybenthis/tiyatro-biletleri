# tiyatro-biletleri
6 arkadaş birlikte tiyatroya gitmeye karar veriyorlar. Aynı sıradan bilet alıyorlar ama biletlerini farklı zamanlarda aldıkları için numaralar karışık. (örneğin 1,5,9,12,17,14)
Koltuklarına tek seferde hızlıca ve doğru sırayla oturmak için bilet numaralarını küçükten büyüğe dizmişler ve bir array oluşturmuşlar. (örneğin [1,5,9,12,14,17])
Sonra içlerinden biri, tiyatro salonlarında tek ve çift koltukların gruplandığını hatırlıyor, yani büyükten küçüğe gruplamak yeterli olmayacak, sayıları tek ve çift olarak gruplamaları gerekiyor (örneğin [12,14,1,5,9,17]).
Bu yüzden yardımınızı istiyorlar. Size küçükten büyüğe sıralanmış 6 sayı içeren bir array verecekler, sizin de bu sayıları tek ve çift olarak gruplayıp önce çiftleri, sonra tekleri yine tek bir array olarak geri vermenizi istiyorlar (örneğin [12,14,1,5,9,17]).
Bu fonksiyonun adı groupEvenAndOdds olsun.

Bu fonksiyon sayılardan oluşan 6 elemanlı bir array'i parametre olarak alsın.
Bu fonksiyon önce çift sayıları, sonra tek sayıları içeren array'i geri dönsün.
Örnek Kullanım: groupEvenAndOdds([1,5,9,12,14,17]) işlemi [12,14,1,5,9,17] dönmeli. groupEvenAndOdds([2,8,19,144,151,157]) işlemi [2,8,144,19,151,157] dönmeli.
