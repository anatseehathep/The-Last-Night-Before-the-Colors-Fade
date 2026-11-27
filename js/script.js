    const branches = {
      DGA: {
        title: "นักเสกจินตนาการ",
        district: "ตรอกจินตนาการ",
        districtLabel: "ย่านศิลป์",
        question: "ถ้าได้สร้างโลกขึ้นมาหนึ่งใบ คุณอยากให้มันเริ่มจากอะไร",
        prompt: "ศิลปินสูงวัยยื่นขวดสีวิเศษให้ แล้วชวนคุณนึกถึงโลกที่อยากสร้าง",
        jobs: [
          ["Character Designer", "สร้างตัวละครให้ทั้งโลกจำได้"],
          ["Concept Artist / Background Artist", "วาดโลกและฉากหลังให้เรื่องเล่ามีชีวิต"],
          ["Webtoon / Comic / Storyboard Artist", "เล่าเรื่องด้วยภาพหลายช่อง"],
          ["Illustrator / Art Toy / Sticker Creator", "ทำให้ภาพวาดกลายเป็นสินค้าและของสะสม"]
        ],
        result: "ภาพวาดของคุณคือสีแรกที่ย้อมเมืองให้กลับมามีชีวิต ทุกคนเงยหน้ามองแล้วพูดตรงกันว่า “นี่แหละโลกที่เราเคยฝันถึง”",
        course: "Digital Arts",
        character: "assets/dga.png.webp",
        careers: ["Illustrator", "Concept / Visual Development Artist", "Character Designer", "Comic / Webtoon Artist", "Storyboard Artist", "Background Artist", "Art Toy Designer", "Sticker Creator"]
      },
      DGD: {
        title: "นักออกแบบประจำเมือง",
        district: "ถนนเอกลักษณ์",
        districtLabel: "ย่านดีไซน์",
        question: "ถ้าได้ฝากลายเซ็นไว้สักแห่งในเมือง คุณอยากให้เป็นที่ไหน",
        prompt: "นักออกแบบคนหนึ่งยืนอยู่หน้าร้านที่ป้ายยังว่างเปล่า แล้วชวนคุณเลือกพื้นที่สร้างเอกลักษณ์",
        jobs: [
          ["Brand Identity Designer", "ออกแบบป้ายและโลโก้ที่ทุกคนเห็นทุกวัน"],
          ["UI Designer", "สร้างหน้าจอแอปและเว็บไซต์ของเมือง"],
          ["Packaging Designer", "ออกแบบกล่องและแพ็กเกจที่ใคร ๆ ก็อยากเก็บ"],
          ["Art Director / Key Visual Designer", "สร้างโปสเตอร์ที่คนเดินผ่านแล้วต้องหันมอง"]
        ],
        result: "ภาพลักษณ์ใหม่ที่คุณออกแบบทำให้ทั้งเมืองมีหน้าตาเป็นของตัวเอง ไม่มีใครสับสนอีกแล้วว่าที่นี่คือที่ไหน",
        course: "Digital Graphic Design",
        character: "assets/dgd.png.webp",
        careers: ["Graphic Designer", "Brand Identity Designer", "Art / Creative Director", "UI Designer", "Packaging Designer", "Editorial Designer", "Motion Graphic Designer", "Poster / Key Visual Designer"]
      },
      IGD: {
        title: "นักสร้างสนามเล่น",
        district: "สนามแห่งการเล่น",
        districtLabel: "ย่านเกม",
        question: "เกมของคุณจะเริ่มจากอะไร",
        prompt: "หัวหน้าสนามเกมเดินมาหา พร้อมชวนคุณออกแบบโลกที่ใคร ๆ ก็อยากเข้ามาเล่น",
        jobs: [
          ["Game Designer / Level Designer", "คิดกติกาและระบบให้คนเล่นแล้วติดใจ"],
          ["Game Artist", "ออกแบบฉากและตัวละครในเกม"],
          ["VR / AR Designer", "สร้างโลกเสมือนที่เดินเข้าไปได้จริง"],
          ["Game Producer", "ดูแลทีมให้เกมไปถึงมือผู้เล่น"]
        ],
        result: "ทั้งเมืองกลายเป็นสนามเล่นของคุณ ทุกคนหัวเราะ ตื่นเต้น และไม่มีใครอยากให้เกมจบ",
        course: "Interactive and Game Design",
        character: "assets/igd.png.webp",
        careers: ["Game / Level Designer", "Game Artist", "Game UI/UX Designer", "VR / AR Designer", "Game Producer", "Narrative Designer", "Technical Artist", "Playtest Designer", "Esports Content Producer"]
      },
      AFX: {
        title: "นักปั้นภาพให้มีชีวิต",
        district: "กำแพงแห่งเรื่องราว",
        districtLabel: "ย่านภาพยนตร์",
        question: "คุณอยากคุมฉากไหนของหนังเรื่องนี้",
        prompt: "ผู้กำกับลึกลับยื่นสคริปต์มาให้ แล้วถามว่าคุณอยากเสกภาพแบบไหนให้เกิดขึ้นจริง",
        jobs: [
          ["3D Animator / Rigging Artist", "ทำให้ตัวละครขยับเหมือนมีชีวิตจริง"],
          ["3D Modeler / Texture Artist", "ปั้นสิ่งของและตัวละครจากความว่างเปล่า"],
          ["VFX Artist", "สร้างฉากระเบิด ไฟ น้ำ และควัน"],
          ["Compositor", "รวมทุกชั้นภาพให้ดูเหมือนถ่ายจริงในช็อตเดียว"]
        ],
        result: "ภาพเคลื่อนไหวของคุณทำให้ท้องฟ้าสว่างวาบ ไม่มีใครเชื่อว่าทั้งหมดนี้เป็นฝีมือคนคนเดียว",
        course: "Computer Animation and Visual Effects",
        character: "assets/afx.png.webp",
        careers: ["3D Artist", "3D Animator", "VFX Artist / Compositor", "Layout / Previs Artist", "VFX Supervisor"]
      },
      DEN: {
        title: "นักรวมใจคนทั้งเมือง",
        district: "เวทีแห่งตัวตน",
        districtLabel: "ย่านบันเทิง",
        question: "บทบาทไหนทำให้คุณใจเต้นแรงที่สุด",
        prompt: "พิธีกรประจำเมืองยื่นไมค์มาให้ แล้วชวนคุณเลือกบทบาทที่จะทำให้คนทั้งเมืองมารวมกัน",
        jobs: [
          ["Content Creator / Scriptwriter", "คิดรายการและคอนเทนต์ที่ทุกคนรอดู"],
          ["Event / Show Producer", "จัดงานที่มอบประสบการณ์เดียวกันให้คนนับพัน"],
          ["Virtual Talent / Streaming Producer", "อยู่เบื้องหลังตัวตนเสมือนและสตรีมเมอร์"],
          ["Entertainment Marketer / Community Manager", "ทำให้ชุมชนแฟนคลับเติบโต"]
        ],
        result: "คุณไม่ได้ขึ้นเวทีคนเดียว แต่ทำให้ทั้งเมืองได้ขึ้นเวทีไปพร้อมกัน",
        course: "Digital Entertainment",
        character: "assets/den.png.webp",
        careers: ["Content Creator / Scriptwriter", "Event / Show Producer", "Streaming / Virtual Talent Producer", "Entertainment Marketing / Social Media Manager", "Video Producer", "Community Manager", "Brand Experience Designer"]
      }
    };

    const mixedTitles = {
      "DGA|DGD": "นักออกแบบที่เล่าเรื่องด้วยภาพวาด",
      "AFX|DGD": "นักออกแบบที่ทำให้ภาพขยับ",
      "DGD|IGD": "นักออกแบบประสบการณ์",
      "DGD|DEN": "นักออกแบบที่เล่าเรื่องเก่ง",
      "AFX|DGA": "นักวาดที่ทำให้ภาพมีชีวิต",
      "DGA|IGD": "นักวาดโลกของเกม",
      "DGA|DEN": "ครีเอเตอร์สายวาด",
      "AFX|IGD": "นักสร้างโลกเสมือนจริง",
      "AFX|DEN": "นักเล่าเรื่องด้วยภาพยนตร์",
      "DEN|IGD": "นักสร้างสนามเล่นให้คนมารวมกัน"
    };

    const resultJobTitles = {
      DGA: ["Character Designer", "Concept / Visual Development Artist", "Comic / Webtoon Artist", "Art Toy Designer"],
      DGD: ["Brand Identity Designer", "UI Designer", "Packaging Designer", "Poster / Key Visual Designer"],
      IGD: ["Game / Level Designer", "Game Artist", "VR / AR Designer", "Game Producer"],
      AFX: ["3D Animator", "3D Artist", "VFX Artist / Compositor", "VFX Artist / Compositor"],
      DEN: ["Content Creator / Scriptwriter", "Event / Show Producer", "Streaming / Virtual Talent Producer", "Entertainment Marketing / Social Media Manager"]
    };

    const questions = [
      {
        chapter: "บทที่ 1 · ตื่นขึ้นในเมืองไร้สี",
        title: "ตื่นขึ้นมา",
        story: "ทุกอย่างรอบตัวเป็นสีเทา แต่มือของคุณยังขยับได้\nและยังมีอะไรให้ทำอีกเยอะ",
        prompt: "ดวงไฟลอยมาใกล้ ๆ แล้วกระซิบว่า “เหลือเวลาถึงคืนนี้เท่านั้นนะ ช่วยเมืองนี้ด้วย” สิ่งแรกที่คุณทำคือ…",
        options: [
          ["DGA", "หยิบชอล์กขึ้นมาแล้วลงสีบนกำแพง"],
          ["DGD", "เดินดูป้ายที่ตัวอักษรซีด แล้วจัดใหม่ให้อ่านง่ายขึ้น"],
          ["IGD", "ถามดวงไฟว่าเมืองนี้มีกติกาอะไร แล้วจะผ่านด่านได้ยังไง"],
          ["AFX", "ลองดันของรอบตัวเบา ๆ ว่าทำไมทุกอย่างถึงนิ่งสนิท"],
          ["DEN", "ตะโกนเรียกคนในเมืองให้มารวมกันที่จัตุรัส"]
        ]
      },
      {
        chapter: "บทที่ 1 · ตื่นขึ้นในเมืองไร้สี",
        title: "ของติดตัว",
        story: "ดวงไฟบอกว่าพกไปได้แค่ชิ้นเดียว เลือกของที่อยากให้เป็นเพื่อนร่วมทาง",
        prompt: "คุณจะหยิบอะไรติดตัวไปด้วย",
        options: [
          ["DGA", "สมุดสเก็ตช์ที่วาดได้ไม่มีวันหมดหน้า"],
          ["DGD", "ชุดสีกับตัวอักษรวิเศษที่ทำให้อะไรก็ดูเข้าที่เข้าทาง"],
          ["IGD", "ตลับเกมเก่า ๆ ที่ยังไม่มีใครรู้วิธีเล่น"],
          ["AFX", "กล้องฟิล์มที่ถ่ายแล้วได้ภาพเคลื่อนไหว"],
          ["DEN", "ไมโครโฟนที่เสียงดังไปทั่วทั้งเมือง"]
        ]
      },
      {
        chapter: "บทที่ 1 · ตื่นขึ้นในเมืองไร้สี",
        title: "ป้ายบอกทางห้าทิศ",
        story: "กลางจัตุรัสมีป้ายห้าป้ายชี้ไปคนละทิศ แต่ละทางมีเสียงและเรื่องราวไม่เหมือนกัน",
        prompt: "คุณเดินเข้าถนนสายไหนก่อน",
        options: [
          ["DGA", "สายที่ผนังทั้งสองข้างเต็มไปด้วยภาพวาด"],
          ["DGD", "สายที่เต็มไปด้วยป้ายร้านและโลโก้"],
          ["IGD", "สายที่มีเสียงเกมกับแสงไฟหลากสี"],
          ["AFX", "สายที่มีเสียงเครื่องฉายหนังกับควันเอฟเฟกต์"],
          ["DEN", "สายที่มีเสียงเพลงและผู้คนมายืนรวมกัน"]
        ]
      },
      {
        chapter: "บทที่ 2 · ปัญหาของชาวเมือง",
        title: "สะพานที่พังครึ่งหนึ่ง",
        story: "เดินไปได้ไม่กี่ก้าว คุณก็เจอคนที่ต้องการความช่วยเหลือทุกมุมถนน",
        prompt: "สะพานข้ามแม่น้ำพังไปครึ่งทาง ฝั่งโน้นมีคนรออยู่ คุณจะข้ามไปยังไง",
        options: [
          ["DGA", "วาดสะพานขึ้นมาใหม่ด้วยเส้นและสีในแบบของคุณ"],
          ["DGD", "ทำป้ายเตือนกับป้ายบอกทางอ้อม ให้ทุกคนเดินตามได้ไม่งง"],
          ["IGD", "ไขกลไกของสะพานให้กลับมาทำงานอีกครั้ง"],
          ["AFX", "ทำภาพสะพานที่ค่อย ๆ ประกอบตัวเองขึ้นมาให้ทุกคนเห็น"],
          ["DEN", "ชวนชาวเมืองมาช่วยกันซ่อม แล้วจัดเป็นงานฉลองเล็ก ๆ"]
        ]
      },
      {
        chapter: "บทที่ 2 · ปัญหาของชาวเมือง",
        title: "เด็กน้อยร้องไห้",
        story: "เด็กคนหนึ่งนั่งร้องไห้อยู่ข้างทาง เพราะตัวการ์ตูนที่รักที่สุดหายไปจากเมือง",
        prompt: "คุณจะช่วยหนูน้อยยังไง",
        options: [
          ["DGA", "วาดตัวการ์ตูนตัวนั้นขึ้นมาใหม่ให้"],
          ["DGD", "ทำสติกเกอร์ โปสเตอร์ และของที่ระลึกให้เธอเก็บไว้"],
          ["IGD", "สร้างเกมเล็ก ๆ ให้เธอได้เล่นกับตัวการ์ตูนตัวนั้น"],
          ["AFX", "ทำให้ตัวการ์ตูนมีชีวิตขึ้นมา เดินและพูดกับเธอได้"],
          ["DEN", "ชวนเด็ก ๆ คนอื่นมานั่งล้อมวงฟังเรื่องของตัวการ์ตูนตัวนั้น"]
        ]
      },
      {
        chapter: "บทที่ 2 · ปัญหาของชาวเมือง",
        title: "ร้านเก่าแก่ที่ใกล้ปิด",
        story: "เจ้าของร้านเก่าแก่เล่าว่าไม่มีใครรู้จักร้านเขาแล้ว",
        prompt: "คุณจะตอบเขาว่ายังไง",
        options: [
          ["DGA", "“หนูจะวาดภาพให้ร้านนี้มีเอกลักษณ์ไม่เหมือนใคร”"],
          ["DGD", "“หนูจะทำแบรนด์ใหม่ให้ ตั้งแต่โลโก้ไปจนถึงป้ายหน้าร้าน”"],
          ["IGD", "“หนูจะทำให้การเดินเข้าร้านเป็นเหมือนเล่นเกมสนุก ๆ”"],
          ["AFX", "“หนูจะทำคลิปแนะนำร้านที่ดูแล้วขนลุก”"],
          ["DEN", "“หนูจะจัดงานแล้วช่วยโปรโมต ให้คนแห่กันมา”"]
        ]
      },
      {
        chapter: "บทที่ 3 · ด่านทดสอบหน้าประตูหินผา",
        title: "สิ่งที่พร้อมฝึกทุกวัน",
        story: "ไม่ว่าคุณจะเดินมาจากย่านไหน\nทุกคนต้องเจอประตูหินบานใหญ่ก่อนจะไปต่อ",
        prompt: "ประตูถามว่า “คุณพร้อมฝึกอะไรทุกวัน”",
        options: [
          ["DGA", "วาดรูปและสังเกตโลกรอบตัวให้ละเอียดขึ้น"],
          ["DGD", "จัดองค์ประกอบ สี และตัวอักษรให้ลงตัว"],
          ["IGD", "คิดเป็นระบบ เป็นขั้นเป็นตอน"],
          ["AFX", "ทำให้ภาพเคลื่อนไหวและดูสมจริง"],
          ["DEN", "พูด เล่าเรื่อง และประสานคนให้ไปทางเดียวกัน"]
        ]
      },
      {
        chapter: "บทที่ 4 · เพื่อนร่วมทาง",
        title: "เจอเพื่อนสี่คน",
        story: "ประตูหินเปิดออก และคุณไม่ได้เดินต่อคนเดียวอีกแล้ว",
        prompt: "ที่ลานน้ำพุ คุณเจอนักเดินทางอีกสี่คน แต่ละคนมีของที่ตัวเองยังทำไม่ได้ คุณเลือกเป็นคนที่…",
        options: [
          ["DGA", "ช่วยวาดภาพให้ทุกคนเห็นตรงกัน"],
          ["DGD", "ทำไกด์ให้ทุกอย่างดูลงตัวและเป็นระเบียบ"],
          ["IGD", "คิดวิธีให้ทุกคนทำงานด้วยกันแล้วสนุก"],
          ["AFX", "ทำตัวอย่างสั้น ๆ ให้เห็นว่าแผนจะออกมาหน้าตาเป็นยังไง"],
          ["DEN", "เป็นคนกลางที่ทำให้ทุกคนอยากเดินต่อไปด้วยกัน"]
        ]
      },
      {
        chapter: "บทที่ 4 · เพื่อนร่วมทาง",
        title: "เพื่อนเห็นไม่ตรงกัน",
        story: "กลางทางมีสองแยก ทีมเถียงกันว่าจะไปทางไหน",
        prompt: "คุณจะทำอะไร",
        options: [
          ["DGA", "วาดแผนที่ให้เห็นภาพว่าแต่ละทางไปไหนบ้าง"],
          ["DGD", "ทำตารางเปรียบเทียบให้ตัดสินใจง่ายขึ้น"],
          ["IGD", "เสนอให้ลองไปทั้งสองทางแล้วดูผลลัพธ์"],
          ["AFX", "ทำภาพจำลองให้เห็นว่าปลายทางของแต่ละทางเป็นยังไง"],
          ["DEN", "ฟังทุกคนก่อน แล้วหาจุดที่ทุกคนรับได้"]
        ]
      },
      {
        chapter: "บทที่ 5 · คืนเทศกาล",
        title: "ขึ้นเวที",
        story: "ฟ้ามืดลงแล้ว ไฟทั่วเมืองเริ่มติด เหลือแค่เวทีใหญ่ที่ยังว่างอยู่",
        prompt: "ไฮไลต์ที่คุณอยากมอบให้ทั้งเมืองคือ…",
        options: [
          ["DGA", "ภาพวาดขนาดยักษ์ที่คนทั้งเมืองเงยหน้ามอง"],
          ["DGD", "ภาพลักษณ์ใหม่ของเมือง ที่ทำให้ทุกมุมมีสไตล์เดียวกัน"],
          ["IGD", "เกมที่คนทั้งเมืองเข้ามาเล่นพร้อมกัน"],
          ["AFX", "โชว์ภาพเคลื่อนไหวกับเอฟเฟกต์ที่ทำให้ทั้งลานตะลึง"],
          ["DEN", "การแสดงสดที่ทุกคนมีส่วนร่วมได้"]
        ]
      },
      {
        chapter: "บทที่ 5 · คืนเทศกาล",
        title: "สีกลับมาแล้ว",
        story: "เมื่อสีค่อย ๆ กลับมาทั่วเมือง ผู้คนหันมามองคุณ",
        prompt: "คุณอยากให้พวกเขาจำคุณว่าเป็นใคร",
        options: [
          ["DGA", "คนที่ให้กำเนิดตัวละครที่ทุกคนรัก"],
          ["DGD", "คนที่ทำให้เมืองนี้ดูดีและมีเอกลักษณ์"],
          ["IGD", "คนที่สร้างโลกให้ทุกคนได้เข้ามาเล่น"],
          ["AFX", "คนที่ทำให้สิ่งที่ดูเป็นไปไม่ได้กลายเป็นจริง"],
          ["DEN", "คนที่ทำให้ทุกคนมารวมกันได้"]
        ]
      }
    ];

    const branchOrder = ["DGA", "DGD", "IGD", "AFX", "DEN"];
    const state = {
      screen: "intro",
      questionIndex: 0,
      questionStep: "story",
      answers: Array(questions.length).fill(null),
      pendingCode: null,
      district: null,
      jobIndex: null,
      passport: {
        nickname: "",
        schoolLevel: "",
        schoolLevelOther: "",
        studyTrack: "",
        studyTrackOther: "",
        province: "",
        discoverySources: [],
        discoveryOther: "",
        selectionFactors: [],
        selectionStage: "",
        creativeWork: [],
        newsChannels: []
      }
    };
    let history = [];
    let optionOrders = [];

    const $ = (selector) => document.querySelector(selector);
    const screens = {
      intro: $("#intro-screen"),
      story: $("#story-screen"),
      question: $("#question-screen"),
      districts: $("#district-screen"),
      job: $("#job-screen"),
      passport: $("#passport-screen"),
      result: $("#result-screen")
    };

    function shuffle(items) {
      const result = [...items];
      for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
      }
      return result;
    }

    let screenTransitionId = 0;
    const prefersReducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function showScreen(name) {
      const next = screens[name];
      if (!next) return;
      const current = Object.values(screens).find((element) => element.classList.contains("active"));
      const transitionId = ++screenTransitionId;
      const reducedMotion = prefersReducedMotion();
      state.screen = name;

      const enterNext = () => {
        next.classList.remove("is-leaving", "is-choice-lock");
        next.classList.add("active", "screen-entering");
        window.scrollTo({ top: 0, behavior: "auto" });
        if (reducedMotion) {
          next.classList.remove("screen-entering");
          return;
        }
        window.setTimeout(() => {
          if (transitionId === screenTransitionId) next.classList.remove("screen-entering");
        }, 450);
      };

      if (current === next) {
        next.classList.remove("screen-entering");
        if (!reducedMotion) {
          next.classList.add("screen-entering");
          next.style.animation = "none";
          void next.offsetWidth;
          next.style.animation = "";
          window.setTimeout(() => {
            if (transitionId === screenTransitionId) next.classList.remove("screen-entering");
          }, 450);
        }
        return;
      }

      if (current && !reducedMotion) {
        current.classList.add("is-leaving");
        window.setTimeout(() => {
          if (transitionId !== screenTransitionId) return;
          current.classList.remove("active", "is-leaving", "screen-entering", "is-choice-lock");
          enterNext();
        }, 110);
      } else {
        if (current) current.classList.remove("active", "is-leaving", "screen-entering", "is-choice-lock");
        enterNext();
      }
    }

    function confirmChoice(button, onConfirm) {
      const screen = button.closest(".screen");
      if (!screen || screen.classList.contains("screen-entering") || screen.classList.contains("is-choice-lock")) return;
      const reducedMotion = prefersReducedMotion();
      screen.classList.add("is-choice-lock");
      button.classList.add("selected", "is-picking");
      button.setAttribute("aria-pressed", "true");
      window.setTimeout(() => {
        button.classList.remove("is-picking");
        screen.classList.remove("is-choice-lock");
        onConfirm();
      }, reducedMotion ? 0 : 140);
    }

    function snapshot() {
      return JSON.parse(JSON.stringify(state));
    }

    function back() {
      if (!history.length) {
        if (state.screen === "question" && state.questionIndex === 0 && state.questionStep === "question") {
          state.questionStep = "story";
          renderQuestion();
        } else if (state.screen === "question" && state.questionIndex === 0) {
          showScreen("story");
        }
        return;
      }
      Object.assign(state, history.pop());
      render();
    }

    function showStoryIntro() {
      showScreen("story");
    }

    function begin() {
      state.questionIndex = 0;
      state.questionStep = "story";
      state.answers = Array(questions.length).fill(null);
      state.pendingCode = null;
      state.district = null;
      state.jobIndex = null;
      state.passport = {
        nickname: "",
        schoolLevel: "",
        schoolLevelOther: "",
        studyTrack: "",
        studyTrackOther: "",
        province: "",
        discoverySources: [],
        discoveryOther: "",
        selectionFactors: [],
        selectionStage: "",
        creativeWork: [],
        newsChannels: []
      };
      history = [];
      optionOrders = questions.map((question) => shuffle(question.options));
      renderQuestion();
      showScreen("question");
    }

    function render() {
      if (state.screen === "story") showScreen("story");
      else if (state.screen === "question") renderQuestion();
      else if (state.screen === "districts") renderDistricts();
      else if (state.screen === "job") renderJobs();
      else if (state.screen === "passport") renderPassport();
      else if (state.screen === "result") renderResult();
      else showScreen("intro");
    }

    function renderQuestion() {
      const index = state.questionIndex;
      const isSceneIntro = index <= 10 && state.questionStep === "story";
      const isFirstSceneQuestion = index === 0 && state.questionStep === "question";
      const isSceneQuestion = index >= 1 && index <= 10 && state.questionStep === "question";
      $("#question-screen").classList.toggle("is-scene-intro", isSceneIntro);
      $("#question-screen").classList.toggle("is-first-question", isFirstSceneQuestion);
      $("#question-screen").classList.toggle("is-scene-question", isSceneQuestion);
      const question = questions[index];
      const currentAnswer = state.answers[index];
      if (state.pendingCode === null && currentAnswer) state.pendingCode = currentAnswer;
      $("#chapter-tag").textContent = question.chapter;
      $("#story-title").textContent = question.title;
      $("#story-copy").textContent = question.story;
      $("#story-illustration").hidden = index !== 0;
      $("#packing-illustration").hidden = index !== 1;
      $("#shop-row-illustration").hidden = index !== 5 || !isSceneIntro;
      $("#fading-character-illustration").hidden = index !== 4;
      $("#junction-illustration").hidden = index !== 2;
      $("#cliff-gate-illustration").hidden = index !== 6;
      $("#explorer-friends-illustration").hidden = index !== 7;
      $("#fork-road-illustration").hidden = index !== 8;
      $("#festival-stage-illustration").hidden = index !== 9;
      $("#restored-star-illustration").hidden = index !== 10;
      $("#bridge-frame").hidden = index !== 3;
      $("#scene-story-actions").hidden = !isSceneIntro;
      $("#question-title").textContent = question.prompt;
      $("#progress-count").textContent = `${String(index + 1).padStart(2, "0")} / 11`;
      const percent = (index / questions.length) * 100;
      $("#progress-fill").style.width = `${percent}%`;
      $("#progress-track").setAttribute("aria-valuenow", String(index));
      const container = $("#options");
      container.replaceChildren();
      optionOrders[index].forEach((option) => {
        const [code, text] = option;
        const button = document.createElement("button");
        button.type = "button";
        button.className = `option${state.pendingCode === code ? " selected" : ""}`;
        button.setAttribute("aria-pressed", state.pendingCode === code ? "true" : "false");
        button.innerHTML = '<span class="option-text"></span><span class="option-check" aria-hidden="true">✦</span>';
        button.querySelector(".option-text").textContent = text;
        button.addEventListener("click", () => {
          confirmChoice(button, () => {
            state.pendingCode = code;
            continueQuestion();
          });
        });
        container.append(button);
      });
      $("#scene-question-btn").textContent = "แตะเพื่อไปต่อ";
      $("#back-btn").style.visibility = history.length || index === 0 ? "visible" : "hidden";
      showScreen("question");
    }

    function scores(answerCount = state.answers.length) {
      const result = Object.fromEntries(branchOrder.map((code) => [code, 0]));
      state.answers.slice(0, answerCount).forEach((code) => { if (code) result[code]++; });
      return result;
    }

    function sortedBranches(scoreMap) {
      return [...branchOrder].sort((a, b) => scoreMap[b] - scoreMap[a] || branchOrder.indexOf(a) - branchOrder.indexOf(b));
    }

    function renderDistricts() {
      const available = branchOrder;
      $("#district-title").textContent = "ย่านของเธอ";
      $("#district-copy").textContent = "ดวงไฟพาเธอเดินเข้าไปในย่านที่ใกล้ตัวเธอที่สุด เลือกได้หนึ่งย่าน";
      const list = $("#district-list");
      list.replaceChildren();
      available.forEach((code) => {
        const branch = branches[code];
        const button = document.createElement("button");
        button.type = "button";
        button.className = `district-card${state.district === code ? " selected" : ""}`;
        button.setAttribute("aria-pressed", state.district === code ? "true" : "false");
        const districtScene = code === "DGA"
          ? '<div class="district-scene"><img src="assets/6.1.png.webp" alt="ภาพประกอบตรอกจินตนาการ"></div>'
          : code === "DGD"
            ? '<div class="district-scene"><img src="assets/6.2.png.webp" alt="ภาพประกอบถนนเอกลักษณ์"></div>'
            : code === "IGD"
              ? '<div class="district-scene"><img src="assets/6.3.png.webp" alt="ภาพประกอบสนามแห่งการเล่น"></div>'
              : code === "AFX"
                ? '<div class="district-scene"><img src="assets/6.4.png.webp" alt="ภาพประกอบกำแพงแห่งเรื่องราว"></div>'
                : code === "DEN"
                  ? '<div class="district-scene"><img src="assets/6.5.png.webp" alt="ภาพประกอบเวทีแห่งตัวตน"></div>'
                  : '<div class="district-scene" aria-hidden="true"></div>';
        button.innerHTML = `<span class="district-code">${code} · ${branch.districtLabel}</span>${districtScene}<h3></h3>`;
        button.querySelector("h3").textContent = branch.district;
        button.addEventListener("click", () => {
          confirmChoice(button, () => {
            state.district = code;
            history.push(snapshot());
            state.jobIndex = null;
            renderJobs();
          });
        });
        list.append(button);
      });
      showScreen("districts");
    }

    function renderJobs() {
      const branch = branches[state.district];
      $("#job-prompt").textContent = branch.prompt;
      const container = $("#job-options");
      container.replaceChildren();
      const orderedJobs = shuffle(branch.jobs.map((job, index) => ({ job, index })));
      orderedJobs.forEach(({ job, index }) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = `option${state.jobIndex === index ? " selected" : ""}`;
        button.setAttribute("aria-pressed", state.jobIndex === index ? "true" : "false");
        button.innerHTML = '<span class="option-text"></span><span class="option-check" aria-hidden="true">✦</span>';
        button.querySelector(".option-text").textContent = job[1];
        button.addEventListener("click", () => {
          confirmChoice(button, () => {
            state.jobIndex = index;
            history.push(snapshot());
            state.questionIndex = 6;
            state.questionStep = "story";
            state.pendingCode = null;
            renderQuestion();
          });
        });
        container.append(button);
      });
      showScreen("job");
    }

    function readPassportForm() {
      const selectedValues = (groupName) => Array.from(
        document.querySelectorAll(`[data-passport-group="${groupName}"] input:checked`),
        (input) => input.value
      );
      return {
        nickname: $("#passport-nickname").value.trim(),
        schoolLevel: $("#passport-school-level").value,
        schoolLevelOther: $("#passport-school-level-other").value.trim(),
        studyTrack: $("#passport-study-track").value,
        studyTrackOther: $("#passport-study-track-other").value.trim(),
        province: $("#passport-province").value.trim(),
        discoverySources: selectedValues("discoverySources"),
        discoveryOther: $("#passport-discovery-other").value.trim(),
        selectionFactors: selectedValues("selectionFactors"),
        selectionStage: document.querySelector('[name="passport-selection-stage"]:checked')?.value || "",
        creativeWork: selectedValues("creativeWork"),
        newsChannels: selectedValues("newsChannels")
      };
    }

    function syncPassportState() {
      state.passport = readPassportForm();
    }

    function updatePassportOtherFields() {
      $("#passport-school-level-other").classList.toggle("visible", $("#passport-school-level").value === "other");
      $("#passport-study-track-other").classList.toggle("visible", $("#passport-study-track").value === "other");
      $("#passport-discovery-other").classList.toggle(
        "visible",
        document.querySelector('[data-passport-group="discoverySources"] input[value="other"]').checked
      );
    }

    function updateSelectionFactorsHint(message) {
      const selectedCount = document.querySelectorAll('[data-passport-group="selectionFactors"] input:checked').length;
      $("#selection-factors-hint").textContent = message || `เลือกแล้ว ${selectedCount}/2 ข้อ (เลือกได้ไม่เกิน 2 ข้อ)`;
    }

    function renderPassport() {
      const passport = state.passport;
      $("#passport-nickname").value = passport.nickname;
      $("#passport-school-level").value = passport.schoolLevel;
      $("#passport-school-level-other").value = passport.schoolLevelOther;
      $("#passport-study-track").value = passport.studyTrack;
      $("#passport-study-track-other").value = passport.studyTrackOther;
      $("#passport-province").value = passport.province;
      $("#passport-discovery-other").value = passport.discoveryOther;
      document.querySelectorAll("[data-passport-group]").forEach((group) => {
        const values = passport[group.dataset.passportGroup];
        group.querySelectorAll("input[type=checkbox]").forEach((input) => {
          input.checked = values.includes(input.value);
        });
      });
      document.querySelectorAll('[name="passport-selection-stage"]').forEach((input) => {
        input.checked = input.value === passport.selectionStage;
      });
      updatePassportOtherFields();
      updateSelectionFactorsHint();
      showScreen("passport");
    }

    function backFromPassport() {
      syncPassportState();
      const previous = history[history.length - 1];
      if (previous) previous.passport = JSON.parse(JSON.stringify(state.passport));
      back();
    }

    function completePassport() {
      syncPassportState();
      history.push(snapshot());
      renderResult();
      showScreen("result");
    }

    function continueQuestion() {
      if (!state.pendingCode) return;
      const index = state.questionIndex;
      const previous = snapshot();
      previous.answers[index] = state.pendingCode;
      previous.pendingCode = state.pendingCode;
      history.push(previous);
      state.answers[index] = state.pendingCode;
      state.pendingCode = null;
      if (index === 5) {
        state.district = null;
        state.jobIndex = null;
        renderDistricts();
      } else if (index === questions.length - 1) {
        renderResult();
        showScreen("result");
      } else {
        state.questionIndex++;
        state.questionStep = state.questionIndex <= 10 ? "story" : "question";
        renderQuestion();
      }
    }

    const pairKey = (first, second) => {
      const direct = `${first}|${second}`;
      const reverse = `${second}|${first}`;
      if (Object.prototype.hasOwnProperty.call(mixedTitles, direct)) return direct;
      if (Object.prototype.hasOwnProperty.call(mixedTitles, reverse)) return reverse;
      return [first, second].sort().join("|");
    };
    function getResultBranches(scoreMap) {
      const sorted = sortedBranches(scoreMap);
      const top = sorted[0];
      const second = sorted[1];
      const tiedLeaders = sorted.filter((code) => scoreMap[code] === scoreMap[top]);
      if (tiedLeaders.length > 1) {
        const finalChoice = state.answers[10];
        return [finalChoice && tiedLeaders.includes(finalChoice) ? finalChoice : tiedLeaders[0]];
      }
      if (scoreMap[top] - scoreMap[second] === 1) return [top, second];
      return [top];
    }

    function renderResult() {
      const scoreMap = scores();
      const resultBranches = getResultBranches(scoreMap);
      const lead = branches[resultBranches[0]];
      const mixed = resultBranches.length === 2;
      const resultTitle = mixed ? mixedTitles[pairKey(...resultBranches)] : lead.title;
      let featuredRole = null;
      let featuredCode = null;
      if (state.district && state.jobIndex !== null) {
        const selected = resultJobTitles[state.district]?.[state.jobIndex] || branches[state.district].jobs[state.jobIndex][0];
        featuredRole = selected;
        featuredCode = state.district;
      }
      const description = mixed
        ? `คุณมีทั้งพลังของ${branches[resultBranches[0]].title}และ${branches[resultBranches[1]].title} — ${branches[resultBranches[0]].result} ${branches[resultBranches[1]].result}`
        : lead.result;
      const displayedCareers = new Set();
      const careerGroupsHtml = resultBranches.map((code) => {
        const careers = [...new Set([
          ...(code === featuredCode && featuredRole ? [featuredRole] : []),
          ...branches[code].careers
        ])].filter((career) => {
          if (displayedCareers.has(career)) return false;
          displayedCareers.add(career);
          return true;
        });
        return `<div class="career-group"><h4>${escapeHtml(code)} · ${escapeHtml(branches[code].course)}</h4><div class="career-list">${careers.map((career) => `<span class="career${code === featuredCode && career === featuredRole ? " featured" : ""}">${escapeHtml(career)}</span>`).join("")}</div></div>`;
      }).join("");
      const selectedCareerHtml = featuredRole && !resultBranches.includes(featuredCode)
        ? `<div class="career-group"><h4>อาชีพที่คุณเลือก · ${escapeHtml(featuredCode)}</h4><div class="career-list"><span class="career featured">${escapeHtml(featuredRole)}</span></div></div>`
        : "";
      $("#result-content").innerHTML = `
        <div class="result-character-stage${mixed ? " is-mixed" : ""}" aria-label="ภาพสัญลักษณ์ประจำสาขาผลลัพธ์">
          ${resultBranches.map((code) => `
            <figure class="result-character-item">
              <img class="result-character-art" src="${escapeHtml(branches[code].character)}" alt="ภาพประจำสาขา ${escapeHtml(code)}">
              <figcaption class="result-character-caption">${escapeHtml(code)} · ${escapeHtml(branches[code].course)}</figcaption>
            </figure>`).join("")}
        </div>
        <div class="result-hero">
          <h2>${escapeHtml(resultTitle)}</h2>
          <div class="result-branches">
            ${resultBranches.map((code) => `<span class="result-branch">${escapeHtml(code)} · ${escapeHtml(branches[code].course)}</span>`).join("")}
          </div>
          <p class="result-description">${escapeHtml(description)}</p>
          <section class="result-careers">
            <h3>อาชีพที่เกี่ยวข้อง</h3>
            <div class="career-groups">${selectedCareerHtml}${careerGroupsHtml}</div>
          </section>
        </div>
        <div class="result-bottom">
          <div class="membership-cta">
            <p class="membership-copy">เพื่อรับข่าวกิจกรรมของ SDM และข้อมูลทุนการศึกษาก่อนใคร</p>
            <a class="primary-btn" href="https://www.spu.ac.th/digitalmedia/" target="_blank" rel="noopener noreferrer">สมัครสมาชิก</a>
          </div>
          <div class="result-actions">
            <button class="primary-btn" id="restart-btn" type="button">เริ่มการเดินทางใหม่</button>
          </div>
        </div>`;
      $("#restart-btn").addEventListener("click", () => {
        history = [];
        state.screen = "intro";
        showScreen("intro");
      });
    }

    function escapeHtml(value) {
      return String(value).replace(/[&<>"']/g, (char) => ({
        "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
      })[char]);
    }

    $("#start-btn").addEventListener("click", showStoryIntro);
    $("#story-start-btn").addEventListener("click", begin);
    $("#story-home-btn").addEventListener("click", () => showScreen("intro"));
    $("#scene-question-btn").addEventListener("click", () => {
      state.questionStep = "question";
      renderQuestion();
    });
    $("#scene-story-back-btn").addEventListener("click", () => {
      if (state.questionIndex === 0) showScreen("story");
      else back();
    });
    $("#back-btn").addEventListener("click", back);
    $("#district-back-btn").addEventListener("click", back);
    $("#job-back-btn").addEventListener("click", back);
    $("#passport-form").addEventListener("input", () => {
      syncPassportState();
      updatePassportOtherFields();
    });
    $("#passport-form").addEventListener("change", (event) => {
      const input = event.target;
      let hintMessage = "";
      if (input.matches('[data-passport-group="selectionFactors"] input[type="checkbox"]') && input.checked) {
        const selected = document.querySelectorAll('[data-passport-group="selectionFactors"] input:checked');
        if (selected.length > 2) {
          input.checked = false;
          hintMessage = "เลือกได้สูงสุด 2 ข้อ";
        }
      }
      if (input.matches('[data-passport-group="creativeWork"] input[type="checkbox"]')) {
        const group = input.closest("[data-passport-group]");
        const noneOption = group.querySelector('input[value="ยังไม่เคยเลย"]');
        if (input === noneOption && input.checked) {
          group.querySelectorAll("input[type=checkbox]").forEach((option) => {
            if (option !== noneOption) option.checked = false;
          });
        } else if (input.checked) {
          noneOption.checked = false;
        }
      }
      syncPassportState();
      updatePassportOtherFields();
      updateSelectionFactorsHint(hintMessage);
    });
    $("#passport-form").addEventListener("submit", (event) => {
      event.preventDefault();
      completePassport();
    });
    $("#passport-back-btn").addEventListener("click", backFromPassport);