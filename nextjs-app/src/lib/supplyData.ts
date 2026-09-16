export type SupplyBrand = "Hikvision" | "Dahua";
export type SupplyCategory =
  | "Dome Camera"
  | "Bullet Camera"
  | "IP Camera"
  | "DVR / NVR";

export interface SupplyItem {
  id: string;
  brand: SupplyBrand;
  category: SupplyCategory;
  model: string;
  name: string;
  image: string;
  specs: { label: string; value: string }[];
}

// Images are hotlinked from the brands' own official product pages
// (hikvision.com / dahuasecurity.com) — verified to load directly.
export const SUPPLY_ITEMS: SupplyItem[] = [
  {
    id: "hik-ds-2ce56d0t-irp",
    brand: "Hikvision",
    category: "Dome Camera",
    model: "DS-2CE56D0T-IRP",
    name: "Turbo HD 2MP Turret/Dome Camera",
    image:
      "https://www.hikvision.com/content/dam/hikvision/products/asset/M000001704/images/DS-2CE56D0T-IRP.png?eo-img.format=webp",
    specs: [
      { label: "Resolution", value: "2MP (1920 x 1080)" },
      { label: "Lens", value: "3.6mm fixed" },
      { label: "IR Range", value: "Up to 20m" },
      { label: "Video Output", value: "HD-TVI / AHD / CVI / CVBS" },
      { label: "Weatherproof", value: "IP66" },
    ],
  },
  {
    id: "hik-ds-2ce16d0t-irpf",
    brand: "Hikvision",
    category: "Bullet Camera",
    model: "DS-2CE16D0T-IRPF(C)",
    name: "Turbo HD 2MP Bullet Camera",
    image:
      "https://assets.hikvision.com/prd/normal/all/image/m000008310/DS-2CE16D0T-IRF%E3%80%81IRPF%E7%AD%92%E6%9C%BA14-D0T-C%E7%89%88%E6%9C%AC.png?eo-img.format=webp",
    specs: [
      { label: "Resolution", value: "2MP (1920 x 1080)" },
      { label: "Lens", value: "3.6mm fixed" },
      { label: "IR Range", value: "Up to 20m" },
      { label: "Video Output", value: "HD-TVI / AHD / CVI / CVBS" },
      { label: "Weatherproof", value: "IP66" },
    ],
  },
  {
    id: "hik-ds-2ce16c0t-irpf",
    brand: "Hikvision",
    category: "Bullet Camera",
    model: "DS-2CE16C0T-IRPF",
    name: "Turbo HD 1MP Bullet Camera",
    image:
      "https://assets.hikvision.com/prd/normal/all/image/m000001637/DS-2CE16C0T-IRPF.png?eo-img.format=webp",
    specs: [
      { label: "Resolution", value: "1MP (1280 x 720)" },
      { label: "Lens", value: "3.6mm fixed" },
      { label: "IR Range", value: "Up to 20m" },
      { label: "Video Output", value: "HD-TVI / AHD / CVI / CVBS" },
      { label: "Weatherproof", value: "IP66" },
    ],
  },
  {
    id: "hik-ds-2cd1023g0e-i",
    brand: "Hikvision",
    category: "IP Camera",
    model: "DS-2CD1023G0E-I",
    name: "2MP Fixed IP Bullet Camera",
    image:
      "https://assets.hikvision.com/prd/public/all/image/m000007714/2CD3041G0-%E7%AD%92%E6%9C%BA39-%E5%9F%BA%E7%BA%BF-%E5%B8%A6%E6%94%AF%E6%9E%B6-%E5%8F%B3%E4%BE%A7.png?eo-img.format=webp",
    specs: [
      { label: "Resolution", value: "2MP (1920 x 1080)" },
      { label: "Lens", value: "2.8mm fixed" },
      { label: "IR Range", value: "Up to 30m" },
      { label: "Connectivity", value: "Ethernet (PoE)" },
      { label: "Weatherproof", value: "IP67" },
    ],
  },
  {
    id: "hik-ds-7204huhi-k1-p",
    brand: "Hikvision",
    category: "DVR / NVR",
    model: "DS-7204HUHI-K1/P",
    name: "4-Channel Turbo HD DVR",
    image:
      "https://assets.hikvision.com/prd/normal/all/image/m000005731/MB-0235HNN-H10-315A1-U1L1-A0-P-HIKVISION-315A2.png?eo-img.format=webp",
    specs: [
      { label: "Channels", value: "4" },
      { label: "Max Resolution", value: "5MP recording" },
      { label: "Video Output", value: "HDMI / VGA" },
      { label: "Storage", value: "1 x SATA HDD (up to 10TB)" },
      { label: "Mobile App", value: "Hik-Connect" },
    ],
  },
  {
    id: "hik-ds-7208huhi-k1-e",
    brand: "Hikvision",
    category: "DVR / NVR",
    model: "DS-7208HUHI-K1/E",
    name: "8-Channel Turbo HD DVR",
    image:
      "https://assets.hikvision.com/prd/normal/all/image/m000007624/%E6%B8%B2%E6%9F%93%E5%9B%BE.png?eo-img.format=webp",
    specs: [
      { label: "Channels", value: "8" },
      { label: "Max Resolution", value: "5MP recording" },
      { label: "Video Output", value: "HDMI / VGA" },
      { label: "Storage", value: "1 x SATA HDD (up to 10TB)" },
      { label: "Mobile App", value: "Hik-Connect" },
    ],
  },
  {
    id: "dahua-hac-hdw1200t-il-a",
    brand: "Dahua",
    category: "Dome Camera",
    model: "HAC-HDW1200T-IL-A",
    name: "2MP Smart Dual Light HDCVI Eyeball Camera",
    image:
      "https://material.dahuasecurity.com/uploads/image/20230324/HAC-HDW1200T-IL-A_1.png",
    specs: [
      { label: "Resolution", value: "2MP (1920 x 1080)" },
      { label: "Lens", value: "3.6mm fixed" },
      { label: "Illumination", value: "IR + white light, up to 40m" },
      { label: "Video Output", value: "HDCVI / AHD / TVI / CVBS" },
      { label: "Weatherproof", value: "IP67" },
    ],
  },
  {
    id: "dahua-hac-hfw1200t-a",
    brand: "Dahua",
    category: "Bullet Camera",
    model: "HAC-HFW1200T-A",
    name: "HDCVI 2MP Bullet Camera",
    image: "https://material.dahuasecurity.com/uploads/image/20230628/hfw1.png",
    specs: [
      { label: "Resolution", value: "2MP (1920 x 1080)" },
      { label: "Lens", value: "3.6mm fixed" },
      { label: "IR Range", value: "Up to 30m" },
      { label: "Video Output", value: "HDCVI / AHD / TVI / CVBS" },
      { label: "Weatherproof", value: "IP67" },
    ],
  },
  {
    id: "dahua-ipc-hdw2431t-as-s2",
    brand: "Dahua",
    category: "IP Camera",
    model: "IPC-HDW2431T-AS-S2",
    name: "4MP Lite IP Eyeball Camera",
    image:
      "https://material.dahuasecurity.com/uploads/image/20230324/HAC-HDW1200T-IL-A_1.png",
    specs: [
      { label: "Resolution", value: "4MP (2560 x 1440)" },
      { label: "Lens", value: "2.8mm fixed" },
      { label: "IR Range", value: "Up to 30m" },
      { label: "Connectivity", value: "Ethernet (PoE)" },
      { label: "Weatherproof", value: "IP67" },
    ],
  },
  {
    id: "dahua-ipc-hfw2431s-s-s2",
    brand: "Dahua",
    category: "IP Camera",
    model: "IPC-HFW2431S-S-S2",
    name: "4MP Lite IP Bullet Camera",
    image: "https://material.dahuasecurity.com/uploads/image/20230628/hfw1.png",
    specs: [
      { label: "Resolution", value: "4MP (2560 x 1440)" },
      { label: "Lens", value: "2.8mm fixed" },
      { label: "IR Range", value: "Up to 30m" },
      { label: "Connectivity", value: "Ethernet (PoE)" },
      { label: "Weatherproof", value: "IP67" },
    ],
  },
  {
    id: "dahua-xvr5104hs-i3",
    brand: "Dahua",
    category: "DVR / NVR",
    model: "XVR5104HS-I3",
    name: "4-Channel Penta-brid WizSense DVR",
    image:
      "https://material.dahuasecurity.com/uploads/cpq/prm-os-srv-res/smart/formal/Product/HQ/1_0_01_01_16195/ProductImage/1_0_01_01_16195_1154865367_crop.png",
    specs: [
      { label: "Channels", value: "4" },
      { label: "Max Resolution", value: "5MP recording" },
      { label: "Video Output", value: "HDMI / VGA" },
      { label: "Storage", value: "1 x SATA HDD (up to 10TB)" },
      { label: "Mobile App", value: "gDMSS / DMSS" },
    ],
  },
  {
    id: "dahua-xvr5108hs-i3",
    brand: "Dahua",
    category: "DVR / NVR",
    model: "XVR5108HS-I3",
    name: "8-Channel Penta-brid WizSense DVR",
    image:
      "https://material.dahuasecurity.com/uploads/cpq/prm-os-srv-res/smart/formal/Product/HQ/1_0_01_01_16109/ProductImage/1_0_01_01_16109_1084760675_crop_thumb.png",
    specs: [
      { label: "Channels", value: "8" },
      { label: "Max Resolution", value: "5MP recording" },
      { label: "Video Output", value: "HDMI / VGA" },
      { label: "Storage", value: "1 x SATA HDD (up to 10TB)" },
      { label: "Mobile App", value: "gDMSS / DMSS" },
    ],
  },
];

export const SUPPLY_BRANDS: SupplyBrand[] = ["Hikvision", "Dahua"];
export const SUPPLY_CATEGORIES: SupplyCategory[] = [
  "Dome Camera",
  "Bullet Camera",
  "IP Camera",
  "DVR / NVR",
];
