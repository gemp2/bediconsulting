/**
 * Copy for /tools/digital-tunnel - the field-app mockup built on the
 * Chipping Sodbury validation data. The app itself is a static PWA in
 * public/tools/digital-tunnel/app/ (images shared with the validation tool).
 */
export const digitalTunnel = {
  appSrc: "/tools/digital-tunnel/app/index.html",
  projectHref: "/projects/chipping-sodbury-tunnel-rila-assessment",
  eyebrow: "Project platform - Concept",
  title: "Digital Tunnel - field app for inspectors",
  intro: [
    "A mockup of the app an inspector would carry into the tunnel: the RILA depth map of each section, the existing records and the spots to check, on a phone or tablet.",
    "Built on the Chipping Sodbury validation data. Open it on your phone for the full experience; it can be installed to the home screen and works offline once downloaded.",
  ],
  mockupNote:
    "Concept mockup - not a released product. Photos taken in the app stay on the device and are not uploaded anywhere.",
  features: [
    {
      title: "Section map",
      body: "Each section unwrapped, with the RILA candidates, the existing record labels and landmarks such as refuges and shafts.",
    },
    {
      title: "Spot sheets",
      body: "Tap a spot: the depth map with the area to check, and the site photos with ruler readings.",
    },
    {
      title: "3D and AR",
      body: "Turn and zoom the scanned section; on a phone, place it on the table or the floor.",
    },
    {
      title: "Camera on the lining",
      body: "The live camera with the depth overlay, to find the spot on the wall and photograph it.",
    },
    {
      title: "Report in one tap",
      body: "Photos and notes from the night go into a PDF, shared from the phone's own mail or Teams.",
    },
    {
      title: "Works underground",
      body: "Download once on Wi-Fi: sections and photos are kept on the phone for the tunnel, with no signal.",
    },
  ],
  screens: [
    { src: "/media/tools/digital-tunnel/phone-map.webp", caption: "Section map with candidates, records and landmarks" },
    { src: "/media/tools/digital-tunnel/phone-spot.webp", caption: "Spot sheet: depth map and site photos" },
    { src: "/media/tools/digital-tunnel/phone-ar.webp", caption: "3D section, ready for AR" },
  ],
};
