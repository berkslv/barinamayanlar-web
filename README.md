# Barınamıyoruz Hareketi

Bu repo Türkiyedeki öğrencilerin barınamama sorunlarını sosyal medyalar dışında ayrı bir websitesi üzerinden özelleşmiş tasarım ile insanlara duyurulması amacı ile tarafımca tasarlanmış ve kodlanmıştır.


Websitesi [Jamstack](https://jamstack.org) araçlarıyla planlanmıştır. CMS olarak [Google Drive](https://drive.google.com), Site generator olarak [Next.js](https://nextjs.org) ve barındırma için ise [Vercel](https://vercel.com) kullanır. Tüm bu araçlar ücretsizdir ve site tamamen ücretsiz barındırılır. (Vercel sadece non-commercial usage için ücretsizdir. Ayrıntılı bilgi için [buraya](https://vercel.com/docs/concepts/limits/fair-use-policy) göz at.)

## İçerik nasıl güncellenir?

Web site içeriği kendi Google Drive hesabımda barındırdığım [JSON](https://drive.google.com/file/d/1xobYWPQvumZVa3leB8MFjKmY7A5Q0rRU/view?usp=sharing) dosyası üzerinden çekilir ve bu dosya güncellendikten sonra aşağıdaki talimatlar uygulanarak yeni bir build oluşturulur böylelikle site içeriği güncellenmiş olur. Tabiki site içeriğini güncellemek için belirttiğim JSON dosyasına write access'e sahip olmanız gerekiyor.

- 'Build request' başlığına (title) sahip içeriği boş bir issue oluşturulur.
- issue closed state'e alınır
- build Github Actions tarafından yeni bir commit ve push oluşturularak işleme alınır, Vercel'de tamamlanır.


