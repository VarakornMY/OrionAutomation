import React from 'react';
import LegalPage from '../components/LegalPage';
import { business } from '../data/business';

const contact = <a href={`mailto:${business.email}`}>{business.email}</a>;

const sections = [
    {
        id: 'scope', title: 'Who we are and scope', content: <>
            <p>{business.name} (business registration {business.registrationNumber}), based in {business.location}, operates orionautomation.my and offers website development, AI chatbots, workflow automation, and digital marketing services. This notice explains how information is handled when you browse this website or contact us.</p>
            <p>Client projects may have a separate agreement and privacy notice describing how customer data is handled for that particular service. Contact {contact} with privacy questions. <a href="#notis-privasi" lang="ms">Baca notis ini dalam Bahasa Melayu.</a></p>
        </>,
    },
    {
        id: 'information', title: 'Information handled by this website', content: <>
            <ul>
                <li><strong>Enquiries:</strong> information you send by email or WhatsApp, such as your name, contact details, company, project requirements, and correspondence.</li>
                <li><strong>Browser profile:</strong> if you used an earlier version of the website, profile details may remain in your browser, including your name, email, display name, avatar reference, and selected plan. These records are local to your browser and are not an online service account or proof of purchase. The profile page lets you change your display name or clear the saved profile.</li>
                <li><strong>Usage and technical information:</strong> Google Analytics collects information about visits and interactions, including pages viewed, browser/device information, and approximate location. Cloudflare provides website hosting and may process IP addresses, request details, and diagnostic logs.</li>
            </ul>
            <p>The source of this information is you, your browser, and the services that deliver website requests. This website does not currently provide an online chatbot, customer sign-in, checkout, or payment collection. Please do not send passwords, payment card details, or identity documents in an initial enquiry.</p>
        </>,
    },
    {
        id: 'purposes', title: 'How information is used', content: <>
            <p>We use enquiry information to respond, discuss proposals, coordinate requested work, and maintain business correspondence. Technical and usage information supports website operation, troubleshooting, security, and understanding which content visitors use.</p>
            <p>You can browse without a profile or an enquiry. You choose whether to provide information. If you withhold details needed for an enquiry or service, we may be unable to respond fully or provide that service. Contact us to limit further use of your enquiry information or to opt out of direct marketing.</p>
        </>,
    },
    {
        id: 'storage', title: 'Cookies, analytics, and browser storage', content: <>
            <p>This site loads Google Analytics, which can use cookies and similar technologies to measure visits. You can restrict cookies in your browser or use <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">Google's Analytics opt-out browser add-on</a>. Browser controls can affect website functionality.</p>
            <p>Local storage may remember your theme preference and profile details from an earlier version of the site. Legacy chatbot settings or administrator session data may also remain, but the public site does not use them to contact a backend or AI provider. Local storage stays on your device until removed or cleared. You can clear the browser profile through the profile page or remove all site data in your browser settings.</p>
        </>,
    },
    {
        id: 'providers', title: 'Service providers and external links', content: <>
            <p>Information may be processed by Cloudflare, Google Analytics, and the email or WhatsApp services you use to contact us. Clicking an external link opens a service with its own privacy practices. The public website does not currently send messages or profile information to an AI provider.</p>
            <p>These providers can process information outside Malaysia under their own terms and privacy practices. See <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer">Cloudflare's Privacy Policy</a>, <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google's Privacy Policy</a>, and <a href="https://www.whatsapp.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">WhatsApp's Privacy Policy</a>. Information may also be disclosed where legally required or necessary to address misuse or protect legal rights.</p>
        </>,
    },
    {
        id: 'retention', title: 'Retention and security', content: <>
            <p>Browser-stored information stays on your device until you remove it or the relevant feature clears it. For information received directly by our team, retention depends on the enquiry, active project, accounting or legal requirements, and the need to resolve disputes. You can ask us about retention or request deletion; some records may need to be kept where required by law or an ongoing agreement.</p>
            <p>Hosting, analytics, and communication providers apply their own retention practices to information they process. We use safeguards appropriate to the services we operate, but cannot guarantee absolute security. Clear website data on shared devices if it contains an old browser profile.</p>
        </>,
    },
    {
        id: 'choices', title: 'Your choices and requests', content: <>
            <p>You may contact {contact} to request access to or correction of personal information we hold, withdraw consent where applicable, object to direct marketing, ask about processing, or request deletion subject to applicable requirements. Explain your request and the enquiry or service involved. We may need enough information to verify your identity before releasing or changing records.</p>
            <p>You can change or clear a saved browser profile through the profile page, or clear local website storage yourself. Withdrawal or restrictions may prevent us from continuing a service that needs the information. If a privacy concern remains unresolved, you can contact <a href="https://www.pdp.gov.my/" target="_blank" rel="noopener noreferrer">Malaysia's Personal Data Protection Department</a>.</p>
        </>,
    },
    {
        id: 'updates', title: 'Children, updates, and contact', content: <>
            <p>Our services are intended for business users. Children should not submit personal information without a parent or guardian's involvement. Contact us if you believe a child has provided information that should be removed.</p>
            <p>We may update this notice as the website or services change and will revise the effective date shown above. For enquiries or privacy requests, email {contact} or <a href="https://wa.me/601117993797" target="_blank" rel="noopener noreferrer">WhatsApp +60 11-1799 3797</a>.</p>
        </>,
    },
];

const PrivacyPolicy = () => (
    <LegalPage
        title="Privacy Policy"
        description="How Orion Automation handles website visits, analytics, email and WhatsApp enquiries, browser storage, and privacy requests. Includes a Bahasa Melayu privacy notice."
        path="/privacy-policy"
        introduction="This notice covers website visits, email and WhatsApp enquiries, and your choices about personal information."
        sections={sections}
    >
        <section id="notis-privasi" className="legal-translation" lang="ms" aria-labelledby="notis-title">
            <h2 id="notis-title">Notis Privasi dalam Bahasa Melayu</h2>
            <p><strong>Tarikh berkuat kuasa: 30 Oktober 2026.</strong> {business.name} (nombor pendaftaran perniagaan {business.registrationNumber}), yang berpangkalan di {business.location}, mengendalikan orionautomation.my dan menawarkan pembangunan laman web, chatbot AI, automasi aliran kerja serta pemasaran digital. Notis ini meliputi lawatan ke laman web dan pertanyaan kepada kami. Projek pelanggan mungkin tertakluk kepada perjanjian dan notis privasi berasingan.</p>
            <p><strong>Maklumat dan sumbernya.</strong> Kami menerima maklumat yang anda berikan melalui e-mel atau WhatsApp, termasuk nama, maklumat hubungan, syarikat, keperluan projek dan surat-menyurat. Google Analytics mengumpulkan maklumat lawatan dan interaksi, termasuk halaman yang dilihat, pelayar/peranti dan anggaran lokasi. Cloudflare menyediakan pengehosan laman web dan mungkin memproses alamat IP, butiran permintaan dan log diagnostik. Maklumat datang daripada anda, pelayar anda dan perkhidmatan yang mengendalikan permintaan laman web.</p>
            <p><strong>Fungsi laman web semasa.</strong> Laman web ini tidak menyediakan chatbot dalam talian, log masuk pelanggan, daftar keluar pembelian atau kutipan pembayaran. Maklumat profil daripada versi laman web terdahulu mungkin masih tersimpan dalam pelayar anda, termasuk nama, e-mel, nama paparan, rujukan avatar dan pelan pilihan. Rekod ini bukan akaun perkhidmatan dalam talian atau bukti pembelian. Halaman profil membolehkan anda menukar nama paparan atau memadamkan profil tersebut. Jangan hantar kata laluan, butiran kad pembayaran atau dokumen pengenalan dalam pertanyaan awal.</p>
            <p><strong>Tujuan dan pilihan.</strong> Maklumat pertanyaan digunakan untuk menjawab anda, membincangkan cadangan, menyelaraskan kerja yang diminta dan menyimpan surat-menyurat perniagaan. Maklumat teknikal dan penggunaan membantu operasi, penyelesaian masalah, keselamatan dan pemahaman penggunaan kandungan. Anda boleh melayari tanpa profil atau menghantar pertanyaan. Pemberian maklumat adalah pilihan anda; tanpa butiran yang diperlukan, kami mungkin tidak dapat menjawab sepenuhnya atau menyediakan perkhidmatan. Hubungi kami untuk mengehadkan penggunaan maklumat pertanyaan atau menghentikan pemasaran langsung.</p>
            <p><strong>Kuki dan storan pelayar.</strong> Google Analytics boleh menggunakan kuki dan teknologi seumpamanya. Anda boleh mengehadkan kuki melalui tetapan pelayar atau menggunakan <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">alat pilih keluar Google Analytics</a>. Storan setempat mungkin menyimpan pilihan tema dan profil daripada versi terdahulu. Tetapan chatbot atau data sesi pentadbir lama juga mungkin kekal, tetapi laman web awam tidak menggunakannya untuk menghubungi pelayan aplikasi atau penyedia AI. Data kekal pada peranti sehingga dipadamkan. Padamkan profil melalui halaman profil atau bersihkan semua data laman web melalui tetapan pelayar.</p>
            <p><strong>Penyedia perkhidmatan dan pemprosesan luar negara.</strong> Cloudflare, Google Analytics serta penyedia e-mel atau WhatsApp yang anda gunakan mungkin memproses maklumat. Penyedia mungkin memproses maklumat di luar Malaysia mengikut terma dan amalan privasi mereka. Laman web awam tidak menghantar mesej atau maklumat profil kepada penyedia AI. Maklumat juga mungkin didedahkan apabila diwajibkan undang-undang atau diperlukan untuk menangani penyalahgunaan atau melindungi hak undang-undang. Pautan luar membuka perkhidmatan dengan amalan privasi sendiri. Rujuk <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer">Dasar Privasi Cloudflare</a>, <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Dasar Privasi Google</a> dan <a href="https://www.whatsapp.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">Dasar Privasi WhatsApp</a>.</p>
            <p><strong>Penyimpanan dan keselamatan.</strong> Data dalam pelayar kekal sehingga anda atau ciri berkaitan memadamkannya. Tempoh penyimpanan maklumat yang diterima oleh kami bergantung pada pertanyaan, projek aktif, keperluan perakaunan atau undang-undang serta penyelesaian pertikaian. Penyedia pengehosan, analitik dan komunikasi mempunyai amalan penyimpanan masing-masing. Anda boleh bertanya tentang tempoh penyimpanan atau memohon pemadaman, tertakluk kepada rekod yang perlu dikekalkan. Kami menggunakan langkah perlindungan yang sesuai, tetapi keselamatan mutlak tidak dapat dijamin. Bersihkan data laman web pada peranti berkongsi jika terdapat profil lama.</p>
            <p><strong>Permintaan anda.</strong> E-mel {contact} untuk meminta akses atau pembetulan data yang kami pegang, menarik balik persetujuan jika berkenaan, menolak pemasaran langsung, bertanya tentang pemprosesan atau memohon pemadaman tertakluk kepada keperluan berkenaan. Nyatakan pertanyaan atau perkhidmatan berkaitan. Kami mungkin memerlukan maklumat untuk mengesahkan identiti sebelum memberikan atau mengubah rekod. Anda boleh menukar atau memadamkan profil melalui halaman profil atau membersihkan storan pelayar. Penarikan balik atau sekatan mungkin menghalang perkhidmatan yang memerlukan data tersebut. Aduan yang belum selesai boleh dirujuk kepada <a href="https://www.pdp.gov.my/" target="_blank" rel="noopener noreferrer">Jabatan Perlindungan Data Peribadi Malaysia</a>.</p>
            <p><strong>Kanak-kanak, perubahan dan hubungan.</strong> Perkhidmatan kami ditujukan kepada pengguna perniagaan. Kanak-kanak tidak patut menghantar data tanpa penglibatan ibu bapa atau penjaga. Hubungi kami jika data kanak-kanak perlu dipadamkan. Notis ini boleh dikemas kini apabila laman web atau perkhidmatan berubah, dengan tarikh berkuat kuasa disemak. Hubungi {contact} atau <a href="https://wa.me/601117993797" target="_blank" rel="noopener noreferrer">WhatsApp +60 11-1799 3797</a>.</p>
        </section>
    </LegalPage>
);

export default PrivacyPolicy;
