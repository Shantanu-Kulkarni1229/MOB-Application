// Sample data matching actual MongoDB data (from mob.*.json exports)
export const sampleDivisions = [
  { _id: '67c1b705dcd7c12e8dce3321', name: 'Sillod' },
  { _id: '67c1b797dcd7c12e8dce3359', name: 'Paithan' },
  { _id: '67c1b7acdcd7c12e8dce335c', name: 'CSN Gramin' },
  { _id: '67c1b7b7dcd7c12e8dce335f', name: 'Kannad' },
  { _id: '67c1b7cadcd7c12e8dce3362', name: 'Vaijapur' },
  { _id: '67c1b7d5dcd7c12e8dce3365', name: 'Gangapur' },
];

export const sampleVillages = [
  { _id: '67c1b776dcd7c12e8dce334e', name: 'Sillod', divisionId: '67c1b705dcd7c12e8dce3321' },
  { _id: '67c1b81ddcd7c12e8dce3370', name: 'Sillod Gramin', divisionId: '67c1b705dcd7c12e8dce3321' },
  { _id: '67c1b83bdcd7c12e8dce3374', name: 'Ajintha', divisionId: '67c1b705dcd7c12e8dce3321' },
  { _id: '67c1b848dcd7c12e8dce3378', name: 'Soygaon', divisionId: '67c1b705dcd7c12e8dce3321' },
  { _id: '67c1b85ddcd7c12e8dce337c', name: 'Phardapur', divisionId: '67c1b705dcd7c12e8dce3321' },
  { _id: '67c1b873dcd7c12e8dce3380', name: 'Paithan', divisionId: '67c1b797dcd7c12e8dce3359' },
  { _id: '67c1b882dcd7c12e8dce3384', name: 'Paithan MIDC', divisionId: '67c1b797dcd7c12e8dce3359' },
  { _id: '67c1b890dcd7c12e8dce3388', name: 'Pachod', divisionId: '67c1b797dcd7c12e8dce3359' },
  { _id: '67c1b899dcd7c12e8dce338c', name: 'Bidkin', divisionId: '67c1b797dcd7c12e8dce3359' },
  { _id: '67c1b8b1dcd7c12e8dce3390', name: 'Phulmbri', divisionId: '67c1b7acdcd7c12e8dce335c' },
  { _id: '67c1b8bcdcd7c12e8dce3394', name: 'Karmad', divisionId: '67c1b7acdcd7c12e8dce335c' },
  { _id: '67c1b8cadcd7c12e8dce3398', name: 'Chikalthana', divisionId: '67c1b7acdcd7c12e8dce335c' },
  { _id: '67c1b8e0dcd7c12e8dce339c', name: 'Badodbajar', divisionId: '67c1b7acdcd7c12e8dce335c' },
  { _id: '67db05c461aca14c8b7dc656', name: 'CSN Gramin', divisionId: '67c1b7acdcd7c12e8dce335c' },
  { _id: '67c1b8f9dcd7c12e8dce33a0', name: 'Kannad', divisionId: '67c1b7b7dcd7c12e8dce335f' },
  { _id: '67c1b908dcd7c12e8dce33a4', name: 'Kannad Gramin', divisionId: '67c1b7b7dcd7c12e8dce335f' },
  { _id: '67c1ba37dcd7c12e8dce33a8', name: 'Khultabad', divisionId: '67c1b7b7dcd7c12e8dce335f' },
  { _id: '67c1ba40dcd7c12e8dce33ac', name: 'Pishor', divisionId: '67c1b7b7dcd7c12e8dce335f' },
  { _id: '67c1ba50dcd7c12e8dce33b0', name: 'Vaijapur', divisionId: '67c1b7cadcd7c12e8dce3362' },
  { _id: '67c1ba58dcd7c12e8dce33b4', name: 'Virgaon', divisionId: '67c1b7cadcd7c12e8dce3362' },
  { _id: '67c1ba66dcd7c12e8dce33b8', name: 'Shirvur', divisionId: '67c1b7cadcd7c12e8dce3362' },
  { _id: '67c1ba79dcd7c12e8dce33bc', name: 'Gangapur', divisionId: '67c1b7d5dcd7c12e8dce3365' },
  { _id: '67c1ba86dcd7c12e8dce33c0', name: 'Shillegaon', divisionId: '67c1b7d5dcd7c12e8dce3365' },
  { _id: '67c1ba96dcd7c12e8dce33c4', name: 'Devgaon Rangari', divisionId: '67c1b7d5dcd7c12e8dce3365' },
];

export const sampleCrimeTypes = [
  { _id: '67c1aafb511e9754b4293494', name: 'इतर चोरी' },
  { _id: '67c1bb58dcd7c12e8dce33cc', name: 'दरोडा (Dacoity)' },
  { _id: '67c1bb64dcd7c12e8dce33cf', name: 'जबरी चोरी' },
  { _id: '67c1bb74dcd7c12e8dce33d2', name: 'घरफोडी' },
  { _id: '67c1bb87dcd7c12e8dce33d5', name: 'वाहन चोरी करणे' },
  { _id: '67e0efa31c1a8b0a7eedcc97', name: 'जनावर चोरी करणे' },
  { _id: '67e0f0761c1a8b0a7eedccd6', name: 'फसवणुक' },
];

export const sampleSubCrimeTypes = [
  // इतर चोरी
  { _id: '67c1bc7ddcd7c12e8dce33e2', name: 'जबरी चोरी', crimeTypeId: '67c1aafb511e9754b4293494' },
  { _id: '67c1bc91dcd7c12e8dce33e6', name: 'विहिरीवरील पाण्याची मोटार/केबल चोरी करणे', crimeTypeId: '67c1aafb511e9754b4293494' },
  { _id: '67c1bca2dcd7c12e8dce33ea', name: 'मंदीरातुन दानपेटी, मुर्ती व पुजेची साहित्य चोरी करणे', crimeTypeId: '67c1aafb511e9754b4293494' },
  { _id: '67c1bcbcdcd7c12e8dce33f2', name: 'एटीम मनिशन मधुन रोख चोरी करणे', crimeTypeId: '67c1aafb511e9754b4293494' },
  { _id: '67c1bcd9dcd7c12e8dce33f6', name: 'आठवडी बाजारातुन/बसस्टँडवरुन मोबाईल चोरी करणे', crimeTypeId: '67c1aafb511e9754b4293494' },
  { _id: '67c1bd13dcd7c12e8dce33fa', name: 'शेतातुन शेती अवजारे चोरी करणे', crimeTypeId: '67c1aafb511e9754b4293494' },
  { _id: '67db056a61aca14c8b7dc60b', name: 'बांधकामाचे साहित्य चोरी करणे', crimeTypeId: '67c1aafb511e9754b4293494' },
  { _id: '67db0b4361aca14c8b7dcae6', name: 'पंप चार्जिंग बॅटरी चोरी', crimeTypeId: '67c1aafb511e9754b4293494' },
  { _id: '67db0e8561aca14c8b7dcdb0', name: 'इलेक्ट्रॉनिक मोटर चोरी', crimeTypeId: '67c1aafb511e9754b4293494' },
  { _id: '67db124461aca14c8b7dd275', name: 'इलेक्ट्रॉनिक चोरी', crimeTypeId: '67c1aafb511e9754b4293494' },
  { _id: '67db12e261aca14c8b7dd34d', name: 'टॉबरच्या बॅटऱ्या चोरी करणे', crimeTypeId: '67c1aafb511e9754b4293494' },
  { _id: '67db13f961aca14c8b7dd538', name: 'उघड्यावरील लोखड / सळई चोरी करणे', crimeTypeId: '67c1aafb511e9754b4293494' },
  { _id: '67db156461aca14c8b7dd742', name: 'रोख रक्कम चोरी', crimeTypeId: '67c1aafb511e9754b4293494' },
  { _id: '67db216361aca14c8b7de725', name: 'चंदनाच्या लाकडाची चोरी', crimeTypeId: '67c1aafb511e9754b4293494' },
  { _id: '67dc37fb46d3ea000dfc1f62', name: 'इतर चोरी', crimeTypeId: '67c1aafb511e9754b4293494' },
  { _id: '67dc424146d3ea000dfc2273', name: 'लाकूड चोरी', crimeTypeId: '67c1aafb511e9754b4293494' },
  { _id: '67dd515ec3485ef16ae5bf49', name: 'कंपनीचे इंजिन चोरी', crimeTypeId: '67c1aafb511e9754b4293494' },
  { _id: '67dd7dddc3485ef16ae5dee2', name: 'सोने चोरी', crimeTypeId: '67c1aafb511e9754b4293494' },
  { _id: '67dd8bc8c3485ef16ae5e3dd', name: 'कंपनीत जावुन अल्युमिनिअम केबल चोरी करणे', crimeTypeId: '67c1aafb511e9754b4293494' },
  { _id: '67dea5d5737f3fbba8994764', name: 'चोरी करण्याचा प्रयत्न', crimeTypeId: '67c1aafb511e9754b4293494' },
  { _id: '67deedaa8383cdd9a7d4288e', name: 'चारचाकी वाहनातुन डिझेल चोरी करणे', crimeTypeId: '67c1aafb511e9754b4293494' },
  // दरोडा (Dacoity)
  { _id: '67e0e4d6739a6ee761e01208', name: 'शेत वस्तीवर जावुन मारहाण करुन दरोडा टाकणे', crimeTypeId: '67c1bb58dcd7c12e8dce33cc' },
  { _id: '67e0e507739a6ee761e0122f', name: 'चारचाकी/मोसा आडवुन मारहाण करुन दरोडा टाकणे', crimeTypeId: '67c1bb58dcd7c12e8dce33cc' },
  { _id: '67e0e516739a6ee761e01237', name: 'घरात प्रवेश करुन धारधार शस्त्राने मारहाण करुन दरोडा टाकणे', crimeTypeId: '67c1bb58dcd7c12e8dce33cc' },
  { _id: '67e0e525739a6ee761e0123f', name: 'जनावर चोरी च्या उददेशाने मारहाण करुन दरोडा टाकणे', crimeTypeId: '67c1bb58dcd7c12e8dce33cc' },
  { _id: '67e2502cbf998e7b8ab52c95', name: 'रोडवर चाकुचा धाक दाखवुन लुटमार करने', crimeTypeId: '67c1bb58dcd7c12e8dce33cc' },
  // जबरी चोरी
  { _id: '67c1bd3cdcd7c12e8dce33fe', name: 'मो. सावर येवुन गळ्यातील चैन ओढुन नेणे (चैन स्ॉकिंग)', crimeTypeId: '67c1bb64dcd7c12e8dce33cf' },
  { _id: '67c1bd47dcd7c12e8dce3402', name: 'मोबाईल जबरी चोरी', crimeTypeId: '67c1bb64dcd7c12e8dce33cf' },
  { _id: '67e0ed291c1a8b0a7eedcbae', name: 'मो. सावर पाठलाग करुन बॅग लिफटींग करणे', crimeTypeId: '67c1bb64dcd7c12e8dce33cf' },
  { _id: '67e0ed491c1a8b0a7eedcbbe', name: 'घरात प्रवेश करुन धारधार शस्त्राने मारहाण करुन जबरी चोरी करणे', crimeTypeId: '67c1bb64dcd7c12e8dce33cf' },
  // घरफोडी
  { _id: '67c1bd57dcd7c12e8dce3406', name: 'दिवसा राहते घराचा दरवाजाचा कडीकोंडा तोडुन आत प्रवेश करुन चोरी करणे', crimeTypeId: '67c1bb74dcd7c12e8dce33d2' },
  { _id: '67c1bd5fdcd7c12e8dce340a', name: 'रात्रीच्या वेळी राहते घराचा दरवाजाचा कडीकोंडा तोडुन आत प्रवेश करुन चोरी करणे', crimeTypeId: '67c1bb74dcd7c12e8dce33d2' },
  { _id: '67e0ed811c1a8b0a7eedcbcd', name: 'घराचे पत्रा उचकटुन आत प्रवेश करुन चोरी करणे', crimeTypeId: '67c1bb74dcd7c12e8dce33d2' },
  { _id: '67e0ed8e1c1a8b0a7eedcbd5', name: 'दुकानाचा/ऑफिसचा पत्रा उचकटुन आत प्रवेश करुन चोरी करणे', crimeTypeId: '67c1bb74dcd7c12e8dce33d2' },
  { _id: '67e0edae1c1a8b0a7eedcbe5', name: 'चॅनल गेटचे कुलुप तोडुन आत प्रवेश करुन चोरी करणे', crimeTypeId: '67c1bb74dcd7c12e8dce33d2' },
  { _id: '67e0edc61c1a8b0a7eedcbed', name: 'मंदीराचा दरवाजाचे कुलूप तोडुन आत प्रवेश करुन चोरी करणे', crimeTypeId: '67c1bb74dcd7c12e8dce33d2' },
  { _id: '67e0edd91c1a8b0a7eedcbf5', name: 'उघड्या घरात आत प्रवेश करुन चोरी करणे', crimeTypeId: '67c1bb74dcd7c12e8dce33d2' },
  { _id: '67e0edec1c1a8b0a7eedcbfd', name: 'शेतातुन शेडमधुन सोयाबीन गहु व इतर सामान चोरी करणे', crimeTypeId: '67c1bb74dcd7c12e8dce33d2' },
  { _id: '67e0edfd1c1a8b0a7eedcc05', name: 'किराणा दुकानातुन सामान चोरी करणे', crimeTypeId: '67c1bb74dcd7c12e8dce33d2' },
  // वाहन चोरी करणे
  { _id: '67c1bd71dcd7c12e8dce340e', name: 'बसस्टँड/शाळा/कॉलेज/कार्यक्रमाच्याठिकाणी हँडल लॉक तोडुन मो. सा चोरी करणे', crimeTypeId: '67c1bb87dcd7c12e8dce33d5' },
  { _id: '67c1bd7cdcd7c12e8dce3412', name: 'चारचाकी वाहन', crimeTypeId: '67c1bb87dcd7c12e8dce33d5' },
  { _id: '67e0ef2f1c1a8b0a7eedcc6c', name: 'घरासमोर उभी असलेली मो.सा हँडल लॉक तोडुन चोरी करणे', crimeTypeId: '67c1bb87dcd7c12e8dce33d5' },
  { _id: '67e0ef3e1c1a8b0a7eedcc74', name: 'डुब्लुकेट चावी च्या सहाय्याने मो.सा चोरी करणे', crimeTypeId: '67c1bb87dcd7c12e8dce33d5' },
  { _id: '67e0ef501c1a8b0a7eedcc7c', name: 'बसस्टँड/शाळा/कॉलेज/कार्यक्रमाच्याठिकाणी उभी असलेली चारचाकी वाहन चोरी करणे', crimeTypeId: '67c1bb87dcd7c12e8dce33d5' },
  { _id: '67e0ef601c1a8b0a7eedcc84', name: 'घरासमोर उभी असलेले चारचाकी वाहन चोरी करणे', crimeTypeId: '67c1bb87dcd7c12e8dce33d5' },
  { _id: '67e0ef6d1c1a8b0a7eedcc8c', name: 'डुब्लुकेट चावी च्या सहाय्याने चारचाकी वाहन चोरी करणे', crimeTypeId: '67c1bb87dcd7c12e8dce33d5' },
  // जनावर चोरी करणे
  { _id: '67e0f0281c1a8b0a7eedccb4', name: 'शेतातील गोठ्यातुन गाय/बैल/वासरु चोरी करणे', crimeTypeId: '67e0efa31c1a8b0a7eedcc97' },
  { _id: '67e0f0361c1a8b0a7eedccbc', name: 'शेतातील गोठ्यतुन बकरी/बोकडा चोरी करणे', crimeTypeId: '67e0efa31c1a8b0a7eedcc97' },
  { _id: '67e0f0431c1a8b0a7eedccc4', name: 'उघड्यावर बांधलेले जनावर चोरी करणे', crimeTypeId: '67e0efa31c1a8b0a7eedcc97' },
  // फसवणुक
  { _id: '67e0f79c1c1a8b0a7eedce80', name: 'अमीष दाखवुन सोन्याचे दागिने रोख रक्कम चोरी करणे', crimeTypeId: '67e0f0761c1a8b0a7eedccd6' },
];

// Cases are loaded from API - empty initial array
export const sampleCases: any[] = [];

// Actual users from mob.users.json
export const sampleUsers = [
  {
    _id: '67ba0e733b9167cc115eb1fe',
    firstName: 'Admin',
    lastName: 'Admin',
    email: 'admin@mob.com',
    phone: '1234567890',
    policeStation: '67c1b81ddcd7c12e8dce3370',
    role: 'admin' as const,
    photo: '/uploads/1740900742827.jpg'
  },
  {
    _id: '67ba0e8a3b9167cc115eb200',
    firstName: 'Police',
    lastName: 'Police',
    email: 'police@mob.com',
    phone: '123456789',
    policeStation: '67c1b85ddcd7c12e8dce337c',
    role: 'police' as const,
    photo: '/uploads/1740900359450.jpg'
  }
];