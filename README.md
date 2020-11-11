# Hipo Unsplash API Projesi
Bu proje unsplash sitesindeki fotografları belirli collectionlarda yapılan sorguya göre görüntüleyen bir uygulamadır. İstediğiniz bir keyword ile belirtilen koleksiyonlarda arama yapabilirsiniz. Görüntülenen fotografın detaylarını ve konum bilgilerini elde edebilirsiniz.
```
├──src 
    ├── components //Kullanılan komponentler burada yer alıyor.
    |   ├──Navbar
    ├── containers 
    │   ├── DetailPage
    │   ├── ImagePage
    │   ├── MainPage   
    ├── services // axios request base path configleri bulunuyor
    ├── utility    
    ├── store   //redux klasörü  
        ├── action
        ├── actionTypes
        ├── reducer
    ├── api //Open street map'in key ve base pathi bulunuyor
    └──  
```
## Projenin Kurulumu
<em>npm install</em> komutu kullanılarak proje bağımlıklıkları yüklenmelidir .
Sonrasında <em>npm start</em> komutu verilerek proje local sunucuda çalıştırılabilir.
## Projenin Geliştirilmesi
Projenin arayüzünde verdiğiniz tasarıma uygun olarak geliştirmeye çalıştım. Herhangi bir arayüz kütüphanesi kullanmadım. Ayrıca tasarımı responsive bir şekilde tasarladım. Projenin state yönetimini redux ile sağladım. Böylece istediğim verilere bir store üzerinden erişim sağladım. Detail sayfasını tasarlarken open street map kullandım. Tıklanan resmin location verileri sayesinde kesin konum verisi elde edebildim.
## Kullanılan Kütüphaneler
Projede istekleri göndermek ve almak için axios isimli bir kütüphane kullandım.












