<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:template match="/">
        <html>
            <head>
                <title>elokuva</title>    
            </head>
            <body>
                <h1>elokuva</h1>
                <hr/>
                <xsl:for-each select="data/elokuva">
                <div>
                    <h2><xsl:value-of select="nimi"/></h2>
                    <h3><xsl:value-of select="vuosi"/></h3>
                    <p><xsl:value-of select="genre"/></p>
                </div>
                </xsl:for-each>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>