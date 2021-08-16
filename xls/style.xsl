<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <head>
            <link rel="stylesheet" type="text/css" href="xsl.css"></link>
                <title>Elokuva lista</title>    
            </head>
            <body>
                <h1>Elokuva lista</h1>
                <hr/>
                <xsl:for-each select="data/elokuva">
                <div class="moi">
                    <h2><xsl:value-of select="nimi"/></h2>
                    <p><xsl:value-of select="ohjaaja"/></p>
                    <p><xsl:value-of select="vuosi"/></p>
                    <p><xsl:value-of select="genre"/></p>
                    <p><xsl:value-of select="ika"/></p>
                    <p><xsl:value-of select="yms"/></p>
                </div>
                </xsl:for-each>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>