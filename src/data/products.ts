import { ChipProduct } from '../types';

export const CHIP_PRODUCTS: ChipProduct[] = [
  {
    id: 'a8107',
    category: 'ble',
    categoryBadge: 'BLE 5.3 SoC',
    categoryBadgeStyle: 'bg-blue-50 border-blue-200 text-blue-700',
    package: 'QFN-32 (5x5mm)',
    name: 'A8107',
    subTitle: 'ARM® Cortex®-M0 32-bit MCU',
    description: '高效能低功耗藍牙 SoC，內建 256KB Flash / 32KB SRAM，整合 8-channel 12-bit ADC 與高效率升壓電源。',
    specs: [
      { label: 'RX SENSITIVITY', value: '-97 dBm @ 1Mbps' },
      { label: 'TX MAX POWER', value: '+8 dBm', highlight: true },
      { label: 'SLEEP CURRENT', value: '0.8 μA (Retention)', highlight: true },
      { label: 'PROTOCOL', value: 'BLE 5.3 / 2Mbps' }
    ],
    targetMarket: '醫療 / 穿戴',
    voltageRange: '1.9V ~ 3.6V',
    frequencyRange: '2402 ~ 2480 MHz',
    features: [
      'ARM® Cortex®-M0 處理器核心',
      '內建 256KB Flash, 32KB SRAM',
      '整合 8-ch 12-bit 高精度 ADC',
      '支援 Bluetooth Low Energy 5.3 協議棧'
    ]
  },
  {
    id: 'a7129',
    category: 'sub1g',
    categoryBadge: 'SUB-1GHz TRX',
    categoryBadgeStyle: 'bg-cyan-50 border-cyan-200 text-cyan-800',
    package: 'QFN-24 (4x4mm)',
    name: 'A7129',
    subTitle: 'High Sensitivity Sub-1GHz Transceiver',
    description: '智慧水電氣三表首選射頻收發器，具備高抗干擾性與極佳相鄰頻道抑制，專為長距離抄表 AMI 設計。',
    specs: [
      { label: 'FREQUENCY', value: '315/433/868/915M' },
      { label: 'RX SENSITIVITY', value: '-118 dBm @ 2Kbps', highlight: true },
      { label: 'TX POWER', value: '+13 dBm', highlight: true },
      { label: 'DATA RATE', value: '2Kbps ~ 250Kbps' }
    ],
    targetMarket: '智慧三表 AMR',
    voltageRange: '2.0V ~ 3.6V',
    frequencyRange: '300 ~ 950 MHz',
    features: [
      '極佳相鄰頻道抑制與高選擇性濾波',
      '支援 Wireless M-Bus 與 Wi-SUN 規範',
      '內建自動頻率校準 (AFC) 與數位 RSSI',
      '超低休眠電流 0.5 μA，長達 15 年電池壽命'
    ]
  },
  {
    id: 'a7196',
    category: '24g',
    categoryBadge: '2.4GHz PROPRIETARY',
    categoryBadgeStyle: 'bg-indigo-50 border-indigo-200 text-indigo-700',
    package: 'QFN-24 (4x4mm)',
    name: 'A7196',
    subTitle: '2Mbps High-Speed Audio Transceiver',
    description: '支援高品質無線立體聲音訊與極低延遲傳輸，專利跳頻 (FHSS) 機制，極適合電競耳機與低延遲麥克風。',
    specs: [
      { label: 'DATA RATE', value: '2 Mbps / 4 Mbps' },
      { label: 'TX POWER', value: '+19.5 dBm', highlight: true },
      { label: 'LATENCY', value: '< 12.5 ms', highlight: true },
      { label: 'AUDIO CODEC', value: '16-bit 48KHz I2S' }
    ],
    targetMarket: '無線音訊 / 電競',
    voltageRange: '2.0V ~ 3.6V',
    frequencyRange: '2400 ~ 2483.5 MHz',
    features: [
      '專利高速跳頻 (FHSS) 抗 WiFi 干擾機制',
      '極致無感傳輸延遲 < 12.5ms',
      '內建 16-bit 48KHz I2S 數位音訊介面',
      '硬體封包加解密與前向錯誤校正 (FEC)'
    ]
  },
  {
    id: 'a8105',
    category: 'ble',
    categoryBadge: 'BLE ULTRA-COMPACT',
    categoryBadgeStyle: 'bg-blue-50 border-blue-200 text-blue-700',
    package: 'QFN-16 (3x3mm)',
    name: 'A8105',
    subTitle: 'Micro Bluetooth Low Energy Module',
    description: '針對防丟器 (Tag) 與微型醫療穿戴設計，尺寸僅 3x3mm，具備極致低功耗與內建精密晶體負載電容調節。',
    specs: [
      { label: 'PACKAGE SIZE', value: '3.0 x 3.0 x 0.75 mm' },
      { label: 'STANDBY CURRENT', value: '0.5 μA', highlight: true },
      { label: 'TX CURRENT', value: '10 mA @ 0dBm', highlight: true },
      { label: 'SECURITY', value: 'AES-128 Engine' }
    ],
    targetMarket: '防丟器 / 醫療',
    voltageRange: '1.8V ~ 3.6V',
    frequencyRange: '2402 ~ 2480 MHz',
    features: [
      '業界超小封裝 QFN-16 3x3mm',
      '內建精密可調晶振負載電容，節省外圍組件',
      '硬體 AES-128 安全加密引擎',
      '待機功耗低至 0.5 μA'
    ]
  },
  {
    id: 'a7130',
    category: 'sub1g',
    categoryBadge: 'HIGH POWER SUB-1G',
    categoryBadgeStyle: 'bg-cyan-50 border-cyan-200 text-cyan-800',
    package: 'QFN-32 (5x5mm)',
    name: 'A7130',
    subTitle: '500Kbps Long Range Dual-Way Transceiver',
    description: '支援高達 500Kbps 高速跳頻無線模組，內建硬體 CRC 與曼徹斯特編碼，專供複雜工業自動化遙控。',
    specs: [
      { label: 'TX POWER', value: '+20 dBm (Integrated)', highlight: true },
      { label: 'HOPPING CHANNELS', value: '128 Channels' },
      { label: 'RSSI RESOLUTION', value: '0.5 dB dynamic', highlight: true },
      { label: 'SUPPLY VOLTAGE', value: '2.0V ~ 3.6V' }
    ],
    targetMarket: '工業自動化遙控',
    voltageRange: '2.0V ~ 3.6V',
    frequencyRange: '315 / 433 / 868 / 915 MHz',
    features: [
      '內建高效率功率放大器 (PA) 輸出 +20dBm',
      '128 個跳頻通道支援複雜工業無線遙控',
      '硬體 CRC 與曼徹斯特編碼解碼',
      '動態 0.5 dB 步進超精密 RSSI 偵測'
    ]
  },
  {
    id: 'a5106',
    category: 'gnss',
    categoryBadge: 'SATELLITE GNSS',
    categoryBadgeStyle: 'bg-emerald-50 border-emerald-200 text-emerald-800',
    package: 'QFN-28 (4x4mm)',
    name: 'A5106',
    subTitle: 'Multi-Constellation GNSS RF Front-End',
    description: '支援 GPS L1 / BDS B1 / GLONASS L1 多星系接收，內建高線性度 LNA 與微波濾波器，高靈敏度快速冷啟動定位。',
    specs: [
      { label: 'NOISE FIGURE', value: '1.8 dB Ultra-Low', highlight: true },
      { label: 'TRACKING SENS', value: '-165 dBm', highlight: true },
      { label: 'CONSTELLATION', value: 'GPS / BeiDou' },
      { label: 'ACTIVE CURRENT', value: '6.2 mA @ 1.8V' }
    ],
    targetMarket: '車隊物流 / 穿戴',
    voltageRange: '1.8V ~ 3.3V',
    frequencyRange: '1575.42 MHz (GPS L1) / 1561.098 MHz (BDS B1)',
    features: [
      '高增益、低雜訊指數 LNA (NF = 1.8 dB)',
      '超靈敏追蹤接收 (-165 dBm)',
      '支援 GPS、北斗、GLONASS 同時接收',
      '微瓦級低功耗架構 6.2 mA'
    ]
  }
];
