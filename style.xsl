<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">>

    <xsl:template match="/">
        <html>
            <head>
                <title>elokuva</title>    
            </head>
            <body>
                <h1>elokuva</h1>
                <hr/>
                <xsl:value-of select="data/viesti/genre"/>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>