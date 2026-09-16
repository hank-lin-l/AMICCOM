import { ApplicationVertical } from '../types';

export const APPLICATION_VERTICALS: ApplicationVertical[] = [
  {
    id: 'meters',
    icon: 'water_drop',
    title: '智慧公用事業三表',
    description: '水、電、瓦斯表自動讀表 (AMR/AMI)。15 年超長電池壽命，強抗水泥牆穿透力。',
    protocolTag: 'Sub-1GHz / Wireless M-Bus',
    colorScheme: 'blue'
  },
  {
    id: 'industry4',
    icon: 'precision_manufacturing',
    title: '工業 4.0 與智慧工廠',
    description: '廠房振動感測、自動化閥門遙控、AGV 無線指令傳輸，極低封包遺失率。',
    protocolTag: 'AEC-Q100 Grade / 跳頻 FHSS',
    colorScheme: 'cyan'
  },
  {
    id: 'lighting',
    icon: 'lightbulb',
    title: '智慧照明與建築控制',
    description: 'BLE Mesh 自組網商業照明、智慧門鎖、無線溫控面板，即時無延遲連動。',
    protocolTag: 'Bluetooth Mesh 5.3 SoC',
    colorScheme: 'blue'
  },
  {
    id: 'medical_automotive',
    icon: 'vital_signs',
    title: '醫療穿戴與車用周邊',
    description: '連續血糖監測 (CGM)、脈搏血氧儀、胎壓偵測 (TPMS) 與車載無鑰匙進入 (RKE)。',
    protocolTag: '微型化 QFN-16 / 3.0x3.0mm',
    colorScheme: 'cyan'
  }
];
