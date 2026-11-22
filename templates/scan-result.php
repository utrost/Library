<dl class="library-scan-metrics" data-library-scan-result data-unknown="<?php p($l->t('Not recorded')); ?>" <?php if ($scanResult['status'] !== 'completed') print_unescaped('hidden'); ?>>
    <div><dt><?php p($l->t('New books')); ?></dt><dd><?php p((string)$scanResult['filesAdded']); ?></dd></div>
    <div><dt><?php p($l->t('Previously indexed books')); ?></dt><dd><?php p((string)($scanResult['pathsUpdated'] + $scanResult['filesUnchanged'])); ?></dd></div>
    <div><dt><?php p($l->t('Books with metadata errors')); ?></dt><dd><?php p((string)$scanResult['metadataErrors']); ?></dd></div>
    <div><dt><?php p($l->t('Unsupported archives')); ?></dt><dd><?php p($scanResult['unsupportedArchives'] ?? $l->t('Not recorded')); ?></dd></div>
</dl>
<details data-library-scan-error-files data-file-base="<?php p($_['scanFileBaseUrl']); ?>" <?php if (empty($scanResult['errorSamples'])) print_unescaped('hidden'); ?>>
    <summary><?php p($l->t('Example files with metadata errors')); ?></summary>
    <ul>
        <?php foreach ($scanResult['errorSamples'] ?? [] as $sample): ?>
            <li><a href="<?php p($_['scanFileBaseUrl'] . (int)$sample['fileId']); ?>"><?php p($sample['name']); ?></a></li>
        <?php endforeach; ?>
    </ul>
</details>
