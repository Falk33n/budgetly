<script lang="ts">
	import '../app.css';
	import { LayoutHead } from '../lib/components/layout';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();
</script>

<LayoutHead />

{@render children()}
