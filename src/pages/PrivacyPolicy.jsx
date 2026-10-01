import React from 'react';
import LegalPage from '../components/LegalPage';

const contact = <a href="mailto:marketing@orionautomation.xyz">marketing@orionautomation.xyz</a>;

const sections = [
    {
        id: 'scope', title: 'Who we are and scope', content: <>
            <p>Orion Automation operates orionautomation.xyz and provides website development, AI chatbots, automation workflows, and digital marketing services. This notice explains how information is handled when you browse this website, use its demonstration features, or contact our team.</p>
            <p>Client projects may have a separate agreement and privacy notice describing how customer data is handled for that particular service. Contact {contact} with privacy questions. <a href="#notis-privasi" lang="ms">Baca notis ini dalam Bahasa Melayu.</a></p>
        </>,
    },
    {
        id: 'information', title: 'Information handled by this website', content: <>
            <ul>
                <li><strong>Enquiries:</strong> information you send by email or WhatsApp, such as your name, contact details, company, project requirements, and correspondence.</li>
                <li><strong>Profile demonstrations:</strong> your name, email, username, avatar, profile changes, and selected plan are saved in your browser when you use the public account features. These features currently demonstrate an account experience; they do not create a verified service account or take payment. The demonstration password field is not saved or sent by the public account flow.</li>
                <li><strong>Chatbot:</strong> your message, recent conversation, and, if signed in to a demonstration profile, your username and selected plan are sent to our backend and Google Gemini to generate a response.</li>
                <li><strong>Usage and technical information:</strong> Google Analytics collects information about visits and interactions, including pages viewed, browser/device information, and approximate location. Hosting and API providers may process IP addresses, request details, and diagnostic logs. Our chatbot uses the requesting IP address to limit excessive requests.</li>
            </ul>
            <p>The source of this information is you, your browser, and the services that deliver website requests. Avoid sending passwords, payment card details, identity documents, sensitive personal information, or confidential client material through the chatbot.</p>
        </>,
    },
    {
        id: 'purposes', title: 'How information is used', content: <>
            <p>We use enquiry information to respond, discuss proposals, coordinate requested work, and maintain business correspondence. Website information supports profile demonstrations, chatbot replies, website operation, troubleshooting, security, and understanding which content visitors use.</p>
            <p>Browsing does not require a profile or chatbot conversation. You choose whether to provide information. If you withhold details needed for an enquiry or service, we may be unable to respond fully or provide that service. Contact us to limit further use of your enquiry information or to opt out of direct marketing.</p>
        </>,
    },
    {
        id: 'storage', title: 'Cookies, analytics, and browser storage', content: <>
            <p>This site loads Google Analytics, which can use cookies and similar technologies to measure visits. You can restrict cookies in your browser or use <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">Google's Analytics opt-out browser add-on</a>. Browser controls can affect website functionality.</p>
            <p>Local storage remembers the demonstration profile and selected plan, theme preference, and chatbot settings. Administrator sign-in also stores an access token locally. Local storage remains until removed or cleared; logging out removes the active profile/session entry. You can clear this site's data in your browser settings. Chat messages are held in the page's memory during the conversation and recent messages are included with subsequent chatbot requests.</p>
        </>,
    },
    {
        id: 'providers', title: 'Service providers and external links', content: <>
            <p>Information may be processed by hosting and infrastructure providers, Google Analytics, Google Gemini, and the email or WhatsApp services used for your enquiry. Website avatars are loaded from DiceBear; the avatar request includes your email as a seed when a demonstration profile is used, along with technical request information. Some pages also load externally hosted images or fonts.</p>
            <p>These providers can process information outside Malaysia under their own terms and privacy practices. See <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google's Privacy Policy</a> and <a href="https://www.whatsapp.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">WhatsApp's Privacy Policy</a>. Information may also be disclosed where legally required or necessary to address misuse or protect legal rights. External sites linked from our website have their own notices.</p>
        </>,
    },
    {
        id: 'retention', title: 'Retention and security', content: <>
            <p>Browser-stored information stays on your device until you remove it or the relevant feature clears it. For information received directly by our team, retention depends on the enquiry, active project, accounting or legal requirements, and the need to resolve disputes. You can ask us about retention or request deletion; some records may need to be kept where required by law or an ongoing agreement.</p>
            <p>Hosting, analytics, and AI providers apply their own retention practices to information they process. We use safeguards appropriate to the services we operate, but cannot guarantee absolute security. Use a trusted device for profile demonstrations and clear website data on shared devices.</p>
        </>,
    },
    {
        id: 'choices', title: 'Your choices and requests', content: <>
            <p>You may contact {contact} to request access to or correction of personal information we hold, withdraw consent where applicable, object to direct marketing, ask about processing, or request deletion subject to applicable requirements. Explain your request and the enquiry or service involved. We may need enough information to verify your identity before releasing or changing records.</p>
            <p>You can edit a demonstration profile through the site's profile controls, sign out, or clear local website storage yourself. Withdrawal or restrictions may prevent us from continuing a service that needs the information. If a privacy concern remains unresolved, you can contact <a href="https://www.pdp.gov.my/" target="_blank" rel="noopener noreferrer">Malaysia's Personal Data Protection Department</a>.</p>
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
        description="How Orion Automation handles website information, cookies, analytics, AI chatbot messages, and privacy requests. Includes a Bahasa Melayu privacy notice."
        path="/privacy-policy"
        introduction="Your privacy matters. This notice describes the information involved in using our website and contacting our team, and the choices available to you."
        sections={sections}
    >
        <section id="notis-privasi" className="legal-translation" lang="ms" aria-labelledby="notis-title">
            <h2 id="notis-title">Notis Privasi — Bahasa Melayu</h2>
            <p><strong>Tarikh berkuat kuasa: 1 Oktober 2026.</strong> Orion Automation mengendalikan orionautomation.xyz dan menawarkan pembangunan laman web, chatbot AI, automasi aliran kerja serta pemasaran digital. Notis ini meliputi penggunaan laman web, ciri demonstrasi dan pertanyaan kepada pasukan kami. Projek pelanggan mungkin tertakluk kepada perjanjian dan notis privasi berasingan.</p>
            <p><strong>Maklumat dan sumbernya.</strong> Kami menerima maklumat yang anda berikan melalui e-mel atau WhatsApp, termasuk nama, maklumat hubungan, syarikat, keperluan projek dan surat-menyurat. Ciri akaun awam menyimpan nama, e-mel, nama pengguna, avatar, perubahan profil dan pelan pilihan dalam pelayar anda. Ciri ini ialah demonstrasi, bukan akaun perkhidmatan yang disahkan atau kemudahan pembayaran. Kata laluan yang dimasukkan dalam aliran akaun demonstrasi tidak disimpan atau dihantar.</p>
            <p><strong>Chatbot dan penggunaan laman web.</strong> Mesej, perbualan terkini dan, jika anda menggunakan profil demonstrasi, nama pengguna serta pelan pilihan dihantar ke pelayan kami dan Google Gemini untuk menghasilkan jawapan. Jangan hantar kata laluan, butiran kad pembayaran, dokumen pengenalan, data peribadi sensitif atau bahan sulit pelanggan. Google Analytics mengumpulkan maklumat lawatan, interaksi, halaman yang dilihat, pelayar/peranti dan anggaran lokasi. Penyedia pengehosan dan API mungkin memproses alamat IP, butiran permintaan dan log diagnostik. Alamat IP digunakan untuk mengehadkan permintaan chatbot yang berlebihan. Maklumat datang daripada anda, pelayar anda dan perkhidmatan yang mengendalikan permintaan laman web.</p>
            <p><strong>Tujuan dan pilihan.</strong> Maklumat digunakan untuk menjawab pertanyaan, membincangkan cadangan, menyelaraskan kerja yang diminta, menyimpan surat-menyurat perniagaan, menjalankan demonstrasi profil, menjana jawapan chatbot, mengendalikan laman web, menyelesaikan masalah, menjaga keselamatan dan memahami penggunaan kandungan. Anda boleh melayari tanpa profil atau chatbot. Pemberian maklumat adalah pilihan anda; tanpa butiran yang diperlukan, kami mungkin tidak dapat menjawab sepenuhnya atau menyediakan perkhidmatan. Hubungi kami untuk mengehadkan penggunaan maklumat pertanyaan atau menghentikan pemasaran langsung.</p>
            <p><strong>Kuki dan storan pelayar.</strong> Google Analytics boleh menggunakan kuki dan teknologi seumpamanya. Anda boleh mengehadkan kuki melalui tetapan pelayar atau menggunakan <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">alat pilih keluar Google Analytics</a>. Kawalan tersebut boleh menjejaskan fungsi laman web. Storan setempat menyimpan profil demonstrasi, pelan pilihan, tema dan tetapan chatbot; log masuk pentadbir turut menyimpan token akses. Maklumat kekal sehingga dipadamkan atau dibersihkan. Log keluar membuang entri profil/sesi aktif. Mesej chatbot berada dalam memori halaman semasa perbualan dan mesej terkini disertakan dalam permintaan seterusnya.</p>
            <p><strong>Pendedahan dan pemprosesan luar negara.</strong> Penyedia pengehosan dan infrastruktur, Google Analytics, Google Gemini, penyedia e-mel dan WhatsApp mungkin memproses maklumat. Avatar dimuatkan daripada DiceBear; permintaan avatar bagi profil demonstrasi menyertakan e-mel sebagai benih serta maklumat teknikal permintaan. Sesetengah halaman memuatkan imej atau fon luaran. Penyedia mungkin memproses maklumat di luar Malaysia mengikut terma dan amalan privasi mereka. Maklumat juga mungkin didedahkan apabila diwajibkan undang-undang atau diperlukan untuk menangani penyalahgunaan atau melindungi hak undang-undang. Laman luar mempunyai notis sendiri; rujuk <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Dasar Privasi Google</a> dan <a href="https://www.whatsapp.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">Dasar Privasi WhatsApp</a>.</p>
            <p><strong>Penyimpanan dan keselamatan.</strong> Data dalam pelayar kekal sehingga anda atau ciri berkaitan memadamkannya. Tempoh penyimpanan maklumat yang diterima pasukan kami bergantung pada pertanyaan, projek aktif, keperluan perakaunan atau undang-undang serta penyelesaian pertikaian. Penyedia pengehosan, analitik dan AI mempunyai amalan penyimpanan masing-masing. Anda boleh bertanya tentang tempoh penyimpanan atau memohon pemadaman, tertakluk kepada rekod yang perlu dikekalkan. Kami menggunakan langkah perlindungan yang sesuai, tetapi keselamatan mutlak tidak dapat dijamin. Gunakan peranti dipercayai dan bersihkan data laman web pada peranti berkongsi.</p>
            <p><strong>Hak dan permintaan.</strong> E-mel {contact} untuk meminta akses atau pembetulan data yang kami pegang, menarik balik persetujuan jika berkenaan, menolak pemasaran langsung, bertanya tentang pemprosesan atau memohon pemadaman tertakluk kepada keperluan berkenaan. Nyatakan pertanyaan atau perkhidmatan berkaitan. Kami mungkin memerlukan maklumat untuk mengesahkan identiti sebelum memberikan atau mengubah rekod. Anda boleh menyunting profil demonstrasi, log keluar atau membersihkan storan pelayar. Penarikan balik atau sekatan mungkin menghalang perkhidmatan yang memerlukan data tersebut. Aduan yang belum selesai boleh dirujuk kepada <a href="https://www.pdp.gov.my/" target="_blank" rel="noopener noreferrer">Jabatan Perlindungan Data Peribadi Malaysia</a>.</p>
            <p><strong>Kanak-kanak, perubahan dan hubungan.</strong> Perkhidmatan kami ditujukan kepada pengguna perniagaan. Kanak-kanak tidak patut menghantar data tanpa penglibatan ibu bapa atau penjaga. Hubungi kami jika data kanak-kanak perlu dipadamkan. Notis ini boleh dikemas kini apabila laman web atau perkhidmatan berubah, dengan tarikh berkuat kuasa disemak. Hubungi {contact} atau <a href="https://wa.me/601117993797" target="_blank" rel="noopener noreferrer">WhatsApp +60 11-1799 3797</a>.</p>
        </section>
    </LegalPage>
);

export default PrivacyPolicy;
