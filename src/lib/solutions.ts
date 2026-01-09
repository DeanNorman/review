import {
  LucideIcon,
  Cloud,
  Shield,
  Globe,
  RefreshCw,
  Lock,
  Zap,
  Headphones,
  ScanLine,
  Radio,
  Camera,
  FileText,
  MapPin,
  WifiOff,
  BadgeCheck,
  QrCode,
  ClipboardList,
  Bell,
  Users,
  Calendar,
  Fingerprint,
  Smartphone,
  BarChart3,
  Building2,
  Boxes,
  PackageCheck,
  Timer,
  Route,
} from "lucide-react";

export type SolutionStep = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type SolutionFeature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type Solution = {
  slug: string;
  name: string;
  valueProp: string;
  supportingLine?: string;
  shortDescription: string;
  description: string;
  highlights: string[];
  problemPoints: string[];
  solutionOutcomes: string[];
  howItWorks: SolutionStep[];
  coreFeatures: SolutionFeature[];
  useCases: string[];
  measurableOutcomes: string[];
  integrations: string[];
  icon: LucideIcon;
};

export const solutions: Solution[] = [
  {
    slug: "custom-reports",
    name: "Custom Reports",
    valueProp: "Digitise, track, and verify field reporting in real time across all sites—even offline.",
    supportingLine: "Designed for multi-site operations, security, and compliance teams.",
    shortDescription:
      "A fully mobile data-collection engine designed for operations teams who need reliable reporting in the field.",
    description:
      "A fully mobile data-collection engine designed for operations teams who need reliable reporting in the field. Staff can capture structured data, images, videos, signatures, geolocation and scan codes in real time, even when offline. Worxit ensures every report is time stamped, linked to the correct site and securely synced to the cloud once a connection is restored. Managers can export, track activity per site, and maintain operational compliance across multiple locations.",
    highlights: [
      "Scan Barcodes and QR Codes",
      "Photos and Videos",
      "Signatures",
      "GPS Location",
      "Reports by Site",
      "Worxit Offline",
      "OCR Scanner",
      "SADL Scan",
    ],
    problemPoints: [
      "Field reporting is inconsistent or paper-based",
      "No reliable proof of time, user, and location",
      "Delayed visibility into incidents and exceptions",
      "Audit evidence is scattered across teams and sites",
    ],
    solutionOutcomes: [
      "Real-time, structured data capture on mobile",
      "Verified evidence with timestamps and GPS",
      "Centralised dashboards by site and report type",
      "Audit-ready records without manual consolidation",
    ],
    howItWorks: [
      { title: "Capture", description: "Collect photos, videos, signatures, and scans on mobile.", icon: Camera },
      { title: "Verify", description: "Time, user, and location are recorded automatically.", icon: BadgeCheck },
      { title: "Sync", description: "Work offline and sync securely when back online.", icon: WifiOff },
      { title: "Report", description: "Generate site-level reporting with a full audit trail.", icon: FileText },
    ],
    coreFeatures: [
      { title: "Barcode & QR Scanning", description: "Scan barcodes and QR codes to capture structured data fast.", icon: QrCode },
      { title: "Photos & Videos", description: "Attach evidence in-field to reduce follow-ups and disputes.", icon: Camera },
      { title: "Signatures", description: "Collect sign-offs to prove completion and accountability.", icon: BadgeCheck },
      { title: "GPS Location", description: "Pin reports to the correct site and validate location.", icon: MapPin },
      { title: "Reports by Site", description: "Filter reporting by branch/site for clear visibility.", icon: Building2 },
      { title: "Offline Mode", description: "Capture work without signal and sync when connected.", icon: WifiOff },
      { title: "OCR Scanner", description: "Extract text from IDs and documents to reduce manual typing.", icon: ScanLine },
      { title: "SADL Scan", description: "Support driver licence workflows with fast scanning.", icon: ClipboardList },
    ],
    useCases: [
      "Security companies (incident and daily reporting)",
      "Facilities teams (inspections and proof of work)",
      "Multi-site operations (standardised reporting)",
      "Compliance teams (audit evidence and verification)",
    ],
    measurableOutcomes: [
      "Faster reporting turnaround",
      "More reliable audit trail",
      "Reduced missing evidence",
      "Improved site-level visibility",
    ],
    integrations: ["Mobile devices", "QR/Barcode scanners", "GPS", "Offline sync"],
    icon: ScanLine,
  },
  {
    slug: "visitor-access-control",
    name: "Visitor Access Control",
    valueProp: "Digitise and verify every visitor entry with location-based access control.",
    supportingLine: "Built for guarded sites, estates, and high-security facilities.",
    shortDescription:
      "A complete digital access control workflow that replaces manual visitor books with secure, verified entry management.",
    description:
      "A complete digital access control workflow that replaces manual visitor books with secure, verified entry management. Guards can scan South African driving licences, ID cards and licence disks using a 2D scanner. Vehicle photos, number plates, and additional notes can be captured on arrival. Access levels can be restricted to certain locations or buildings, ensuring only authorised individuals enter sensitive areas.",
    highlights: [
      "Visitors Access Card",
      "Scan Drivers Licence, ID Cards & Licence Disks",
      "Capturing any Additional Information i.e. Photo of Vehicle",
      "Limit Access to Locations",
      "SADL Photo Verification",
    ],
    problemPoints: [
      "Manual visitor books are slow and error-prone",
      "No consistent verification of identity and vehicles",
      "Limited control over where visitors may access",
      "Weak audit records for incidents or investigations",
    ],
    solutionOutcomes: [
      "Faster check-in with verified identity capture",
      "Controlled access by location and rules",
      "Vehicle and visitor evidence stored centrally",
      "Audit-ready visitor history by site",
    ],
    howItWorks: [
      { title: "Scan", description: "Capture verified visitor identity using scanning workflows.", icon: ScanLine },
      { title: "Record", description: "Add vehicle details, photos, and supporting notes.", icon: Camera },
      { title: "Control", description: "Limit access to specific locations or buildings.", icon: Lock },
      { title: "Audit", description: "Review visitor history and proof for compliance.", icon: FileText },
    ],
    coreFeatures: [
      { title: "Visitors Access Card", description: "Issue or manage visitor access credentials.", icon: BadgeCheck },
      { title: "Scan Licences & IDs", description: "Scan driver’s licences, ID cards, and licence disks.", icon: ScanLine },
      { title: "Capture Vehicle Evidence", description: "Store photos and number plate information at entry.", icon: Camera },
      { title: "Additional Information", description: "Record notes and supporting context per entry.", icon: ClipboardList },
      { title: "Limit Access to Locations", description: "Restrict visitors to approved zones and buildings.", icon: Building2 },
      { title: "SADL Photo Verification", description: "Use photo verification to reduce fraud and mistakes.", icon: BadgeCheck },
    ],
    useCases: [
      "Industrial sites and warehouses",
      "Corporate campuses",
      "Residential estates and gated communities",
      "Business parks and multi-tenant buildings",
    ],
    measurableOutcomes: [
      "Reduced entry friction",
      "Improved visitor verification",
      "Better investigation readiness",
      "More consistent access control",
    ],
    integrations: ["Mobile devices", "2D scanners", "Photo capture", "Location rules"],
    icon: Shield,
  },
  {
    slug: "visitor-management",
    name: "Visitor Management",
    valueProp: "Invite, notify, and monitor visitors with secure access codes and real-time visibility.",
    supportingLine: "Designed for estates, business parks, and office buildings.",
    shortDescription:
      "A resident/visitor solution used on ideal for estates, gated communities, business parks and office buildings.",
    description:
      "A resident/visitor solution used on ideal for estates, gated communities, business parks and office buildings. Clients can send invitations with secure access codes, receive global notices, and monitor who is on-site. The guard app and client app work together to streamline entry and exit. Facilities booking, future-dated access passes and an emergency button provide a full festive module and security ecosystem.",
    highlights: [
      "Invite Guests with Codes",
      "Send Global Notices",
      "Visitors On-Site View",
      "Client App and Guard App Integrated in One Solution",
      "Emergency Button",
      "Future Dated Invites",
      "Facilities Bookings",
    ],
    problemPoints: [
      "Visitor coordination is manual and inconsistent",
      "Residents/tenants lack visibility into arrivals",
      "Guards have limited context at the gate",
      "No unified record of who is on-site",
    ],
    solutionOutcomes: [
      "Secure invitations and faster visitor entry",
      "Real-time notifications to residents/tenants",
      "On-site visibility for staff and security",
      "Centralised visitor history and audit trail",
    ],
    howItWorks: [
      { title: "Invite", description: "Create visitor invites with secure access codes.", icon: Users },
      { title: "Notify", description: "Send global notices and arrival notifications.", icon: Bell },
      { title: "Verify", description: "Guards validate access codes and log entry.", icon: BadgeCheck },
      { title: "Manage", description: "Track who is on-site and review visitor records.", icon: ClipboardList },
    ],
    coreFeatures: [
      { title: "Guest Codes", description: "Invite guests with secure access codes.", icon: QrCode },
      { title: "Global Notices", description: "Broadcast important messages across sites.", icon: Bell },
      { title: "On-Site View", description: "Monitor who is currently on-site.", icon: Users },
      { title: "Client + Guard Apps", description: "One solution supporting both residents/clients and guards.", icon: Smartphone },
      { title: "Emergency Button", description: "Enable rapid escalation when incidents occur.", icon: Shield },
      { title: "Future-Dated Invites", description: "Plan visits ahead of time for smoother access.", icon: Calendar },
      { title: "Facilities Bookings", description: "Manage shared facilities and access expectations.", icon: ClipboardList },
    ],
    useCases: [
      "Residential estates",
      "Corporate offices",
      "Business parks",
      "Multi-tenant buildings",
    ],
    measurableOutcomes: [
      "Faster gate processing",
      "Reduced visitor disputes",
      "Improved on-site awareness",
      "More consistent visitor records",
    ],
    integrations: ["Mobile apps", "Access codes", "Notifications"],
    icon: Globe,
  },
  {
    slug: "maintenance-rounds",
    name: "Maintenance Rounds",
    valueProp: "Schedule, verify, and report maintenance checks with real-time oversight and proof of work.",
    supportingLine: "Built for facilities, maintenance teams, and site supervisors.",
    shortDescription:
      "Designed for facilities, security and maintenance teams, this module ensures all routine inspections, equipment checks and maintenance rounds happen on time.",
    description:
      "Designed for facilities, security and maintenance teams, this module ensures all routine inspections, equipment checks and maintenance rounds happen on time. Staff receive scheduled tasks, submit photo/video evidence, and record issues instantly on mobile. Automated voice notifications and real-time dashboards highlight missed or failed rounds. Managers get completion tracking with graphs, breakdowns per shift, building or asset group.",
    highlights: [
      "Missed, Failed or Incomplete Rounds",
      "Maintenance Scheduling",
      "Picture, Text and Video Reporting",
      "Voice Notifications",
      "Maintenance Count per Shift",
      "Reports with Complete Graph",
    ],
    problemPoints: [
      "Checks are missed or completed late",
      "No consistent proof of work and issue tracking",
      "Supervisors lack real-time visibility",
      "Reporting is manual and hard to compare",
    ],
    solutionOutcomes: [
      "Scheduled rounds with clear accountability",
      "Evidence-based reporting in the field",
      "Real-time alerts on incomplete checks",
      "Dashboards and graphs for performance visibility",
    ],
    howItWorks: [
      { title: "Schedule", description: "Plan rounds by site and shift for consistent execution.", icon: Calendar },
      { title: "Inspect", description: "Capture picture, text, and video evidence on mobile.", icon: Camera },
      { title: "Alert", description: "Flag missed, failed, or incomplete rounds automatically.", icon: Bell },
      { title: "Report", description: "Review completion counts and graphs by shift.", icon: BarChart3 },
    ],
    coreFeatures: [
      { title: "Missed/Failed Round Alerts", description: "Identify missed, failed, or incomplete rounds quickly.", icon: Bell },
      { title: "Maintenance Scheduling", description: "Schedule checks with clear shift ownership.", icon: Calendar },
      { title: "Picture/Text/Video Reporting", description: "Capture rich evidence to reduce repeat work.", icon: Camera },
      { title: "Voice Notifications", description: "Escalate exceptions without delays.", icon: Headphones },
      { title: "Count per Shift", description: "Track output and consistency per shift.", icon: Timer },
      { title: "Graph Reports", description: "Visualize trends and completion over time.", icon: BarChart3 },
    ],
    useCases: [
      "Facilities management",
      "Industrial sites",
      "Corporate campuses",
      "Retail and multi-site operations",
    ],
    measurableOutcomes: [
      "Fewer missed checks",
      "Faster escalation of issues",
      "Improved proof of work",
      "Clearer performance tracking",
    ],
    integrations: ["Mobile devices", "Reporting dashboards", "Alerts"],
    icon: RefreshCw,
  },
  {
    slug: "inventory-management",
    name: "Inventory Management",
    valueProp: "Track stock movement across sites with verified scans, timestamps, and audit-ready reporting.",
    supportingLine: "Built for warehouses, logistics, and multi-site operations.",
    shortDescription:
      "A complete stock-tracking module covering daily movements, item transfers between sites, and real-time stock level monitoring.",
    description:
      "A complete stock-tracking module covering daily movements, item transfers between sites, and real-time stock level monitoring. Every movement is time stamped and user verified, creating a full audit trail. Staff can scan items using NFC, barcodes, or QR codes to eliminate errors and speed up processing. The dashboard provides clear reporting on stock ageing, high-movement items, and branch-level circulation.",
    highlights: [
      "Track Inventory Movements",
      "Comprehensive Reporting",
      "Time Tracked Stock",
      "Track Branch Transfers",
      "Time Stamped Movements",
      "Technologies - NFC, QR and Barcodes",
    ],
    problemPoints: [
      "Stock transfers are hard to verify",
      "Manual logs create gaps and disputes",
      "Limited real-time visibility by site",
      "Audits are time-consuming and disruptive",
    ],
    solutionOutcomes: [
      "Real-time stock movement tracking",
      "Verified transfers with timestamps",
      "Centralised reporting across branches",
      "Reduced audit friction with clear trails",
    ],
    howItWorks: [
      { title: "Move", description: "Record every movement and transfer between sites.", icon: Route },
      { title: "Scan", description: "Verify stock using NFC, QR, or barcode scans.", icon: QrCode },
      { title: "Track", description: "Monitor levels, aging, and high-movement items.", icon: Boxes },
      { title: "Report", description: "Generate comprehensive, timestamped reporting.", icon: FileText },
    ],
    coreFeatures: [
      { title: "Track Inventory Movements", description: "Log daily movements with verification.", icon: Boxes },
      { title: "Comprehensive Reporting", description: "Get clarity across sites with centralised reporting.", icon: FileText },
      { title: "Time-Tracked Stock", description: "Understand stock age and activity over time.", icon: Timer },
      { title: "Branch Transfers", description: "Track inter-branch transfers with accountability.", icon: Building2 },
      { title: "Time-Stamped Movements", description: "Capture when and where each movement occurred.", icon: BadgeCheck },
      { title: "NFC, QR, Barcodes", description: "Use the right technology for your environment.", icon: QrCode },
    ],
    useCases: [
      "Logistics and warehousing",
      "Retail back-of-house",
      "Multi-site operations",
      "Field stock distribution",
    ],
    measurableOutcomes: [
      "Fewer stock discrepancies",
      "Faster audits",
      "Clearer transfer accountability",
      "Improved stock visibility",
    ],
    integrations: ["NFC", "QR/Barcodes", "Mobile devices", "Dashboards"],
    icon: Cloud,
  },
  {
    slug: "asset-management",
    name: "Asset Management",
    valueProp: "Register, verify, and track assets across sites with check-in/out, transfers, and GPS proof.",
    supportingLine: "Built for teams managing equipment, tools, and high-value assets.",
    shortDescription:
      "A mobile-first asset lifecycle solution that helps companies register, tag, track and audit assets across multiple locations.",
    description:
      "A mobile-first asset lifecycle solution that helps companies register, tag, track and audit assets across multiple locations. Assets can be checked in and out, transferred between staff or branches, and verified with NFC or barcode scanning. GPS tagging allows managers to confirm the last known location of each asset. Ideal for security equipment, tools, machinery, tech devices and more.",
    highlights: [
      "Asset Register",
      "Check Assets In and Out",
      "Transfers Assets",
      "Scan NFC or Barcode Asset Tags",
      "Record with GPS Location",
      "Mobile Onboard Asset",
    ],
    problemPoints: [
      "Asset registers are outdated or fragmented",
      "Transfers are hard to verify across sites",
      "Equipment goes missing without accountability",
      "Audits take time and disrupt operations",
    ],
    solutionOutcomes: [
      "Mobile-first asset register and onboarding",
      "Verified check-in/out and transfers",
      "GPS-tagged last known location",
      "Audit-ready history across branches",
    ],
    howItWorks: [
      { title: "Register", description: "Create an asset register and onboard assets from mobile.", icon: PackageCheck },
      { title: "Tag", description: "Attach NFC or barcode tags for fast verification.", icon: QrCode },
      { title: "Transfer", description: "Track transfers between staff and branches.", icon: Route },
      { title: "Audit", description: "Confirm last known location with GPS and reporting.", icon: MapPin },
    ],
    coreFeatures: [
      { title: "Asset Register", description: "Maintain a central asset register across locations.", icon: ClipboardList },
      { title: "Check In / Check Out", description: "Verify custody changes with check-in/out workflows.", icon: BadgeCheck },
      { title: "Transfer Assets", description: "Record transfers between sites and staff.", icon: Route },
      { title: "Scan Asset Tags", description: "Scan NFC or barcode tags to confirm identity.", icon: QrCode },
      { title: "GPS Location", description: "Record and confirm last known location.", icon: MapPin },
      { title: "Mobile Onboarding", description: "Onboard and update assets in the field.", icon: Smartphone },
    ],
    useCases: [
      "Security equipment tracking",
      "Facilities tools and maintenance assets",
      "Industrial machinery and devices",
      "IT and mobile device inventories",
    ],
    measurableOutcomes: [
      "Reduced asset loss",
      "Faster asset audits",
      "Clearer custody tracking",
      "More reliable asset register",
    ],
    integrations: ["NFC tags", "Barcodes", "Mobile devices", "GPS"],
    icon: Lock,
  },
  {
    slug: "time-attendance",
    name: "Time & Attendance",
    valueProp: "Prevent buddy-clocking and get real-time time-on-duty visibility across all sites.",
    supportingLine: "Built for distributed workforces and site-based teams.",
    shortDescription:
      "An accurate, cloud-driven attendance system that uses Facial Recognition and NFC to prevent buddy-clocking.",
    description:
      "An accurate, cloud-driven attendance system that uses Facial Recognition and NFC to prevent buddy-clocking. Staff can clock in at access points, on-site locations or approved mobile zones. Break tracking, shift summaries, and attendance analytics give managers precise control. Enrolments can be done on mobile, batch uploaded, or linked to visitor access devices. Real-time dashboards show time on duty across all sites.",
    highlights: [
      "Facial Recognition & NFC",
      "T&A with Breaks",
      "Mobile On-Duty Live View",
      "Mobile Enrolments",
      "Reports with Time Worked",
      "Batch Enrolments",
      "Attendance by Location",
    ],
    problemPoints: [
      "Buddy-clocking and time fraud",
      "Limited visibility into who is on duty",
      "Manual timesheets and reconciliation",
      "Inconsistent attendance records across sites",
    ],
    solutionOutcomes: [
      "Verified attendance with facial recognition and NFC",
      "Real-time on-duty dashboards",
      "Accurate breaks, shifts, and overtime tracking",
      "Reporting by location for compliance and payroll",
    ],
    howItWorks: [
      { title: "Enroll", description: "Enroll staff quickly on mobile or in batches.", icon: Smartphone },
      { title: "Clock In", description: "Clock in via facial recognition or NFC at approved points.", icon: Fingerprint },
      { title: "Track", description: "Monitor breaks, shifts, and overtime in real time.", icon: Timer },
      { title: "Report", description: "Export attendance by location for accountability.", icon: FileText },
    ],
    coreFeatures: [
      { title: "Facial Recognition + NFC", description: "Prevent buddy-clocking with verified identity checks.", icon: Fingerprint },
      { title: "Break Tracking", description: "Track breaks and shift summaries accurately.", icon: Timer },
      { title: "Mobile On-Duty Live View", description: "See who is on duty in real time.", icon: Users },
      { title: "Mobile Enrolments", description: "Enroll staff from mobile with reduced admin.", icon: Smartphone },
      { title: "Reports with Time Worked", description: "Get clear reporting for payroll and audits.", icon: FileText },
      { title: "Batch Enrolments", description: "Onboard teams faster across sites.", icon: ClipboardList },
      { title: "Attendance by Location", description: "Track attendance by site and access point.", icon: Building2 },
    ],
    useCases: [
      "Security guards and patrol teams",
      "Facilities and cleaning teams",
      "Construction and industrial workforces",
      "Multi-site operations",
    ],
    measurableOutcomes: [
      "Reduced time fraud",
      "Faster payroll processing",
      "Improved on-duty visibility",
      "More accurate attendance records",
    ],
    integrations: ["Facial recognition", "NFC", "Mobile devices", "Dashboards"],
    icon: Zap,
  },
  {
    slug: "patrols",
    name: "Patrols",
    valueProp: "Digitise, track, and verify security patrols in real time across all sites.",
    supportingLine: "Designed for guarding teams, supervisors, and compliance reporting.",
    shortDescription:
      "A structured patrol management system built for guarding and compliance-critical environments.",
    description:
      "A structured patrol management system built for guarding and compliance-critical environments. Supervisors can schedule patrols per shift, track missed or incomplete checkpoints, and verify that each tag was scanned at the correct time. The system supports multimedia incident reporting and voice notes, helping guards escalate issues instantly. Detailed analytics with shift counts and exception reports give management clear visibility into performance and risk.",
    highlights: [
      "Missed, Failed or Incomplete Patrol",
      "Patrol Scheduling",
      "NFC Patrol Tags",
      "Picture, Text and Video Reporting",
      "Voice Notifications",
      "Patrol Count per Shift",
      "Reports with Complete Graph",
    ],
    problemPoints: [
      "Patrols are recorded manually or after the fact",
      "No real-time visibility into completion",
      "Compliance gaps from missed or incomplete checks",
      "Reporting lacks evidence and consistency",
    ],
    solutionOutcomes: [
      "Real-time patrol completion visibility",
      "Verified checkpoints with NFC tags",
      "Audit-ready patrol history with evidence",
      "Immediate alerts on missed or incomplete patrols",
    ],
    howItWorks: [
      { title: "Schedule", description: "Schedule patrols per shift and site.", icon: Calendar },
      { title: "Capture", description: "Scan NFC patrol tags and record incidents in-field.", icon: QrCode },
      { title: "Monitor", description: "Supervisors track progress and exceptions in real time.", icon: BarChart3 },
      { title: "Report", description: "Export patrol reports with counts and graphs.", icon: FileText },
    ],
    coreFeatures: [
      { title: "Missed/Failed Patrol Alerts", description: "Flag missed, failed, or incomplete patrols instantly.", icon: Bell },
      { title: "Patrol Scheduling", description: "Set patrols per shift with clear accountability.", icon: Calendar },
      { title: "NFC Patrol Tags", description: "Verify checkpoints instantly using NFC tags.", icon: Fingerprint },
      { title: "Picture/Text/Video Reporting", description: "Capture incident evidence on mobile.", icon: Camera },
      { title: "Voice Notifications", description: "Add voice notes and escalate quickly.", icon: Headphones },
      { title: "Count per Shift", description: "Track patrol output by shift.", icon: Timer },
      { title: "Graph Reports", description: "Visualize patrol performance and exceptions.", icon: BarChart3 },
    ],
    useCases: [
      "Security companies (multi-site patrols)",
      "Industrial sites",
      "Corporate campuses",
      "Logistics and warehousing",
    ],
    measurableOutcomes: [
      "Reduced missed patrols",
      "Improved compliance accuracy",
      "Faster incident escalation",
      "Full audit trail for reporting",
    ],
    integrations: ["NFC tags", "Mobile devices", "Dashboards", "Exports"],
    icon: Headphones,
  },
  {
    slug: "gsm-poc-radios-with-patrols",
    name: "GSM POC Radios with Patrols",
    valueProp: "Unify voice communications and verified patrol workflows—managed centrally from the cloud.",
    supportingLine: "Designed for security teams operating across wide geographic areas.",
    shortDescription:
      "A cloud-managed communication system using GSM PTT radios that link seamlessly with smartphones and dispatcher PCs.",
    description:
      "A cloud-managed communication system using GSM PTT radios that link seamlessly with smartphones and dispatcher PCs. Teams can talk instantly across the country, manage group channels, and view live GPS locations. Radios are programmed and updated through the cloud, removing the need for expensive installations or repeaters. The radios also include a simple built-in patrol function for sites that only need basic guard rounds. Guards scan NFC tags using the radio, receive audible confirmations, and managers export clean Excel reports for compliance checks.",
    highlights: [
      "GSM PTT Radios",
      "Link to Smartphones, Vehicle Radios and PC Dispatcher",
      "Multi Site Group Talk",
      "Live GPS Locations",
      "Nationwide Coverage",
      "Cloud Programming and Device Management",
      "No Expensive Infrastructure",
      "Simple Radio Patrol Patrol Mode (NFC Tags + Audible Alerts + Excel Reports)",
    ],
    problemPoints: [
      "Fragmented radio and patrol workflows",
      "High infrastructure cost for legacy radio systems",
      "Limited visibility across sites and teams",
      "Hard to prove patrol compliance in real time",
    ],
    solutionOutcomes: [
      "Cloud-managed radios and channels",
      "Nationwide coverage without expensive infrastructure",
      "Live GPS visibility for teams and vehicles",
      "Built-in patrol verification with exportable reports",
    ],
    howItWorks: [
      { title: "Connect", description: "Link radios, smartphones, vehicles, and PC dispatch.", icon: Radio },
      { title: "Manage", description: "Program and manage devices from the cloud.", icon: Cloud },
      { title: "Locate", description: "View live GPS locations across sites.", icon: MapPin },
      { title: "Verify", description: "Use patrol mode with NFC tags and alerts.", icon: Fingerprint },
    ],
    coreFeatures: [
      { title: "GSM PTT Radios", description: "Reliable GSM push-to-talk radios for field teams.", icon: Radio },
      { title: "Dispatcher + Vehicle + Smartphone Linking", description: "Connect teams across devices and roles.", icon: Smartphone },
      { title: "Group Talk", description: "Run secure group channels across sites.", icon: Users },
      { title: "Live GPS Locations", description: "Track teams and vehicles in real time.", icon: MapPin },
      { title: "Nationwide Coverage", description: "Operate across wide areas with consistent connectivity.", icon: Globe },
      { title: "Cloud Programming", description: "Manage devices and settings centrally.", icon: Cloud },
      { title: "No Expensive Infrastructure", description: "Avoid legacy radio infrastructure costs.", icon: Building2 },
      { title: "Radio Patrol Mode", description: "Use NFC tags, audible alerts, and exportable reports.", icon: ClipboardList },
    ],
    useCases: [
      "Security teams with wide-area coverage",
      "Vehicle patrol and dispatch operations",
      "Remote and distributed sites",
      "Multi-site guarding companies",
    ],
    measurableOutcomes: [
      "Improved team coordination",
      "Reduced communication delays",
      "Verified patrol compliance",
      "Lower infrastructure cost",
    ],
    integrations: ["GSM PTT radios", "NFC tags", "Smartphones", "Vehicle radios", "Dispatcher PCs"],
    icon: Radio,
  },
];
